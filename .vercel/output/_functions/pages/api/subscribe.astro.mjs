export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
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
    const API_KEY = undefined                                 ;
    const DC = undefined                                       ;
    const LIST_ID = undefined                                     ;
    if (!API_KEY || !DC || !LIST_ID) {
      return new Response(JSON.stringify({
        ok: false,
        message: "Service not configured"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
