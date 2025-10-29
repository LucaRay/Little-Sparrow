export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  try {
    const { email, firstName } = req.body;

    if (!email) {
      res.status(400).json({ ok: false, message: 'Email is required' });
      return;
    }

    // Check environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DC = process.env.MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !DC || !LIST_ID) {
      res.status(500).json({ ok: false, message: 'Service not configured' });
      return;
    }

    // Create Mailchimp API URL
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    
    // Create authorization header
    const authString = `any:${API_KEY}`;
    const encodedAuth = Buffer.from(authString).toString('base64');
    
    // Make request to Mailchimp
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedAuth}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
        merge_fields: { 
          FNAME: firstName || '' 
        },
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      res.status(200).json({ 
        ok: true, 
        message: 'Check your inbox to confirm your subscription.' 
      });
      return;
    }
    
    if (response.status === 400 && data?.title === 'Member Exists') {
      res.status(200).json({ 
        ok: true, 
        message: 'You\'re already subscribed.' 
      });
      return;
    }
    
    res.status(400).json({ 
      ok: false, 
      message: data?.detail || 'Couldn\'t subscribe right now.' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ ok: false, message: 'Request failed' });
  }
}
