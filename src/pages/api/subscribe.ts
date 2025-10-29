import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;
    
    if (!email) {
      return new Response(JSON.stringify({ 
        ok: false, 
        message: "Email is required" 
      }), { 
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Check environment variables
    const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    const DC = import.meta.env.MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !DC || !LIST_ID) {
      return new Response(JSON.stringify({ 
        ok: false, 
        message: "Service not configured" 
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
    
    // Make request to Mailchimp
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${encodedAuth}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending",
        merge_fields: { 
          FNAME: "" 
        },
      }),
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
    return new Response(JSON.stringify({ 
      ok: false, 
      message: "Error: " + error.message 
    }), { 
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};