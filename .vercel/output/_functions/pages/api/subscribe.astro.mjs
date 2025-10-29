export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, firstName } = body;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({
        ok: false,
        message: "Enter a valid email."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const API_KEY = undefined                                 ;
    const DC = undefined                                       ;
    const LIST_ID = undefined                                     ;
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
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const authString = `any:${API_KEY}`;
    const encodedAuth = btoa(authString);
    const requestBody = JSON.stringify({
      email_address: email,
      status: "pending",
      merge_fields: {
        FNAME: firstName || ""
      }
    });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${encodedAuth}`
      },
      body: requestBody
    });
    const data = await response.json();
    if (response.status === 200) {
      return new Response(JSON.stringify({
        ok: true,
        message: "Check your inbox to confirm your subscription."
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (response.status === 400 && data?.title === "Member Exists") {
      return new Response(JSON.stringify({
        ok: true,
        message: "You're already subscribed."
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
