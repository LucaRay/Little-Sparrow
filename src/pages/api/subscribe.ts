import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { email, firstName } = body;
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ 
        ok: false, 
        message: "Enter a valid email." 
      }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Get environment variables
    const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    const DC = import.meta.env.MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;

    // Check if environment variables are set
    if (!API_KEY || !DC || !LIST_ID) {
      console.error("Missing Mailchimp environment variables");
      return new Response(JSON.stringify({ 
        ok: false, 
        message: "Server configuration error." 
      }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Create Mailchimp API URL
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    
    // Create authorization header using btoa (Web API compatible)
    const authString = `any:${API_KEY}`;
    const encodedAuth = btoa(authString);
    
    // Prepare request body
    const requestBody = JSON.stringify({
      email_address: email,
      status: "pending",
      merge_fields: { 
        FNAME: firstName || "" 
      },
    });
    
    // Make request to Mailchimp
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${encodedAuth}`,
      },
      body: requestBody,
    });

    const data = await response.json();

    // Handle successful subscription
    if (response.status === 200) {
      return new Response(JSON.stringify({ 
        ok: true, 
        message: "Check your inbox to confirm your subscription." 
      }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Handle existing member
    if (response.status === 400 && data?.title === "Member Exists") {
      return new Response(JSON.stringify({ 
        ok: true, 
        message: "You're already subscribed." 
      }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Handle other errors
    return new Response(JSON.stringify({ 
      ok: false, 
      message: data?.detail || "Couldn't subscribe right now." 
    }), { 
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
    
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(JSON.stringify({ 
      ok: false, 
      message: "Request failed." 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};