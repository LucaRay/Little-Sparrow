import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, firstName } = await request.json();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, message: "Enter a valid email." }), { status: 400 });
    }

    // Read at request time. `import.meta.env` is inlined at build time, so a
    // var missing during the build gets baked in as `undefined` permanently.
    const API_KEY = process.env.MAILCHIMP_API_KEY ?? import.meta.env.MAILCHIMP_API_KEY;
    const DC = process.env.MAILCHIMP_SERVER_PREFIX ?? import.meta.env.MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID ?? import.meta.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !DC || !LIST_ID) {
      const missing = [
        !API_KEY && "MAILCHIMP_API_KEY",
        !DC && "MAILCHIMP_SERVER_PREFIX",
        !LIST_ID && "MAILCHIMP_AUDIENCE_ID",
      ].filter(Boolean);
      console.error("Mailchimp config missing:", missing.join(", "));
      return new Response(JSON.stringify({ ok: false, message: "Mailing list isn't configured yet." }), { status: 500 });
    }

    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from("any:" + API_KEY).toString("base64"),
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending",
        merge_fields: { FNAME: firstName || "" },
      }),
    });

    const data = await res.json();

    if (res.status === 200) {
      return new Response(JSON.stringify({ ok: true, message: "Check your inbox to confirm your subscription." }), { status: 200 });
    }
    if (res.status === 400 && data?.title === "Member Exists") {
      return new Response(JSON.stringify({ ok: true, message: "You're already subscribed." }), { status: 200 });
    }
    return new Response(JSON.stringify({ ok: false, message: data?.detail || "Couldn't subscribe right now." }), { status: 400 });
  } catch (err) {
    console.error("Subscribe failed:", err);
    return new Response(JSON.stringify({ ok: false, message: "Request failed." }), { status: 400 });
  }
};
