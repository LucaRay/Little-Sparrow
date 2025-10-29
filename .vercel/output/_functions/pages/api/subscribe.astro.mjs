export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { email, firstName } = await request.json();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, message: "Enter a valid email." }), { status: 400 });
    }
    const API_KEY = undefined                                 ;
    const DC = undefined                                       ;
    const LIST_ID = undefined                                     ;
    if (!API_KEY || !DC || !LIST_ID) {
      return new Response(JSON.stringify({ ok: false, message: "Server configuration error." }), { status: 500 });
    }
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from("any:" + API_KEY).toString("base64")
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending",
        merge_fields: { FNAME: firstName || "" }
      })
    });
    const data = await res.json();
    if (res.status === 200) {
      return new Response(JSON.stringify({ ok: true, message: "Check your inbox to confirm your subscription." }), { status: 200 });
    }
    if (res.status === 400 && data?.title === "Member Exists") {
      return new Response(JSON.stringify({ ok: true, message: "You're already subscribed." }), { status: 200 });
    }
    return new Response(JSON.stringify({ ok: false, message: data?.detail || "Couldn't subscribe right now." }), { status: 400 });
  } catch {
    return new Response(JSON.stringify({ ok: false, message: "Request failed." }), { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
