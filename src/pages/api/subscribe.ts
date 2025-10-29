import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Simple health check first
  try {
    const body = await request.json();
    const { email } = body;
    
    // Basic validation
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

    // For now, return success without actually calling Mailchimp
    // This will help us verify the function works
    return new Response(JSON.stringify({ 
      ok: true, 
      message: "Subscription received (test mode)" 
    }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      ok: false, 
      message: "Invalid request" 
    }), { 
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};