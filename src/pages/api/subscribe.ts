import type { APIRoute } from "astro";

// Force Node.js runtime so Buffer exists on Vercel
export const runtime = 'node';
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, firstName } = await request.json().catch(() => ({} as any));
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, message: "Enter a valid email." }), { status: 400 });
    }

    const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    const DC = import.meta.env.MAILCHIMP_SERVER_PREFIX; // e.g. "us21"
    const LIST_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !DC || !LIST_ID) {
      return new Response(JSON.stringify({ ok: false, message: "Server missing Mailchimp config." }), { status: 500 });
    }

    const auth = "Basic " + Buffer.from(`any:${API_KEY}`).toString("base64");
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const mc = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth,
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending", // double opt-in
        merge_fields: { FNAME: firstName || "" },
      }),
    });

    const data = await mc.json().catch(() => ({}));
    if (mc.status === 200) {
      return new Response(JSON.stringify({ ok: true, message: "Check your inbox to confirm your subscription." }), { status: 200 });
    }
    if (mc.status === 400 && data?.title === "Member Exists") {
      return new Response(JSON.stringify({ ok: true, message: "You're already subscribed." }), { status: 200 });
    }
    return new Response(JSON.stringify({ ok: false, message: data?.detail || "Couldn't subscribe right now." }), { status: 400 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, message: "Request failed." }), { status: 400 });
  }
};
