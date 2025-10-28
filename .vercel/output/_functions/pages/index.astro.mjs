/* empty css                                 */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute, m as maybeRenderHead, n as renderScript, o as renderComponent } from '../chunks/astro/server_BJGwRGRE.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://little-sparrow.vercel.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "Little Sparrow", description = "Official website of Little Sparrow" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="utf-8"><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="/og.jpg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="/og.jpg">', '</head> <body class="bg-white text-gray-900 font-sans"> ', ' <!-- Bandsintown widget (already used in Shows section) --> <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"><\/script> <!-- Low-motion reveal --> <script src="/reveal.js" defer><\/script> </body> </html>'])), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/layouts/Base.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent"> <a href="#home" class="flex items-center group"> <img src="/images/bird.png" alt="Little Sparrow homepage" class="h-8 w-8 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"> </a> <!-- Desktop Navigation --> <ul class="hidden md:flex space-x-6 text-sm font-medium"> <li><a href="#home" class="text-white hover:text-white/80 transition-colors">Home</a></li> <li><a href="#music" class="text-white hover:text-white/80 transition-colors">Music</a></li> <li><a href="#live" class="text-white hover:text-white/80 transition-colors">Live</a></li> <li><a href="#about" class="text-white hover:text-white/80 transition-colors">About</a></li> <li><a href="#videos" class="text-white hover:text-white/80 transition-colors">Videos</a></li> <li><a href="https://uklittlesparrow.bandcamp.com/music" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 transition-colors">Shop</a></li> <li><a href="#contact" class="text-white hover:text-white/80 transition-colors">Contact</a></li> </ul> <!-- Mobile Menu Button --> <button class="md:hidden text-white hover:text-white/80 transition-colors" id="mobile-menu-button"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Mobile Menu --> <div class="md:hidden hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-sm z-40" id="mobile-menu"> <div class="px-6 py-4"> <ul class="flex flex-col space-y-3 text-sm font-medium"> <li><a href="#home" class="text-white hover:text-white/80 transition-colors">Home</a></li> <li><a href="#music" class="text-white hover:text-white/80 transition-colors">Music</a></li> <li><a href="#live" class="text-white hover:text-white/80 transition-colors">Live</a></li> <li><a href="#about" class="text-white hover:text-white/80 transition-colors">About</a></li> <li><a href="#videos" class="text-white hover:text-white/80 transition-colors">Videos</a></li> <li><a href="https://uklittlesparrow.bandcamp.com/music" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 transition-colors">Shop</a></li> <li><a href="#contact" class="text-white hover:text-white/80 transition-colors">Contact</a></li> </ul> </div> </div> ${renderScript($$result, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-8 py-10 text-center text-sm text-gray-500 bg-white relative z-10"> <div class="flex items-center justify-center gap-2"> <img src="/images/bird.png" alt="" aria-hidden="true" class="h-4 w-4 opacity-60"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Little Sparrow.</p> </div> </footer>`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://little-sparrow.vercel.app");
const $$BandcampCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BandcampCard;
  const { src, title, label, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full card"> <div class="relative aspect-square w-[90%] mx-auto overflow-hidden rounded-lg shadow-lg"> <iframe${addAttribute(src, "src")}${addAttribute(title, "title")} class="absolute inset-0 h-full w-full border-0" loading="lazy" allow="autoplay; encrypted-media" seamless></iframe> </div> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="mt-4 inline-block w-full text-center bg-[#8B0000] text-white font-medium py-2 px-4 rounded hover:bg-[#8B0000]/90 transition-colors btn"> ${label} </a> </div>`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/BandcampCard.astro", void 0);

const $$Astro$2 = createAstro("https://little-sparrow.vercel.app");
const $$VideoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VideoGrid;
  const { videos } = Astro2.props;
  const [premierVideo, ...gridVideos] = videos;
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <!-- Premier Video Section --> <div class="px-6 mb-8"> <div class="relative group cursor-pointer card"${addAttribute(premierVideo.id, "data-video-id")}> <!-- Premier Thumbnail Container --> <div class="relative aspect-[21/9] rounded-lg overflow-hidden shadow-2xl bg-gray-900"> <!-- YouTube Thumbnail --> <img${addAttribute(`https://img.youtube.com/vi/${premierVideo.id}/maxresdefault.jpg`, "src")}${addAttribute(premierVideo.title, "alt")} class="w-full h-full object-cover" loading="lazy"> <!-- Custom Play Overlay --> <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"> <div class="bg-white bg-opacity-20 rounded-full p-6 group-hover:bg-opacity-30 transition-all duration-300"> <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"></path> </svg> </div> </div> </div> </div> </div> <!-- Grid Videos Section --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6"> ${gridVideos.map((video) => renderTemplate`<div class="relative group cursor-pointer card"${addAttribute(video.id, "data-video-id")}> <!-- Thumbnail Container --> <div class="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900"> <!-- YouTube Thumbnail --> <img${addAttribute(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`, "src")}${addAttribute(video.title, "alt")} class="w-full h-full object-cover" loading="lazy"> <!-- Custom Play Overlay --> <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"> <div class="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300"> <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"></path> </svg> </div> </div> </div> </div>`)} </div> </div> ${renderScript($$result, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/VideoGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/VideoGrid.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative py-20 bg-cover bg-center bg-no-repeat reveal" style="background-image: url('/images/about-bg.jpg')"> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black/50"></div> <!-- Content --> <div class="relative z-10 container mx-auto px-4 max-w-4xl"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-8"> <span>About</span> </h2> </div> <div class="text-white text-lg leading-relaxed space-y-6"> <p>
Little Sparrow is singer/songwriter Katie Ware, a title that came from Elbow front man Guy Garvey, affectionately calling her 'Cockney Sparrow' it lead onto her stage name 'Little Sparrow'.
</p> <p>
Drawing influences from the likes of Kate Bush, PJ Harvey and All About Eve, Little Sparrows music creates songs that are filled with a blend of styles, woven into the colourful tapestry of her music, often with a mysterious fairy tale quality.
</p> <p>
The critically acclaimed debut album 'Wishing Tree' released in 2014 had regular air play on BBC Introducing, BBC 6 Music and BBC Radio 2 as well as regular regional and international radio plays.
</p> <p>
She has supported established folk favourites such as Kathryn Roberts & Sean Lakeman, Blue Rose Code, The Cadbury Sisters and Beth Rowley plus sang alongside Bonnie Dobson in 2018.
</p> <p>
Laurel Canyon Music voted her 'New Artist of The Year' 2016.
</p> <blockquote class="italic text-gray-200 border-l-4 border-white/30 pl-6 my-8">
"A breathtaking vocalist delivering original and beautiful songs. An incredibly gifted songwriter with a great stage presence and a gorgeous voice."<br> <span class="text-sm font-semibold">Chris Hawkins – BBC 6Music and BBC Radio 2</span> </blockquote> <blockquote class="italic text-gray-200 border-l-4 border-white/30 pl-6 my-8">
"Her voice is pure and lovely and she possesses a natural talent as a writer and singer."<br> <span class="text-sm font-semibold">Simon Raymond – Bella Union Records</span> </blockquote> <blockquote class="italic text-gray-200 border-l-4 border-white/30 pl-6 my-8">
"Wishing Tree's arrival on my doormat is one of the few times when an album from an artist I have never heard of has come through the letterbox and turned out to be a stone-cold masterpiece."<br> <span class="text-sm font-semibold">RnR Magazine</span> </blockquote> </div> </div> </section>`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/About.astro", void 0);

const $$Shows = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="live" class="relative py-20 bg-cover bg-center bg-no-repeat reveal" style="background-image: url('/images/show-bg.jpg');"> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black/40"></div> <!-- Content --> <div class="relative z-10 px-6 max-w-4xl mx-auto"> <div class="mb-6"> <h2 class="text-4xl mb-8 text-center text-white font-bold"> <span>Live</span> </h2> </div> <a class="bit-widget-initializer" data-artist-name="little sparrow" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#ffffff" data-link-color="#8B0000" data-background-color="rgba(0,0,0,0.3)" data-display-limit="15" data-display-start-time="false" data-link-text-color="#ffffff" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(255,255,255,0.3)"></a> </div> </section>`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/Shows.astro", void 0);

const $$Astro$1 = createAstro("https://little-sparrow.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-4xl mb-8 text-center font-bold"> <span>${children}</span> </h2>`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/SectionTitle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://little-sparrow.vercel.app");
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const { title = "Join the mailing list" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section id="subscribe" class="px-6 py-16 max-w-xl mx-auto reveal"> <h2 class="text-4xl mb-4 text-center font-bold">', `</h2> <p class="mb-6 text-sm opacity-80 text-center">New music, show dates, and occasional notes. No spam.</p> <form id="mc-form" class="space-y-4" novalidate> <input type="text" name="company" class="hidden" tabindex="-1" autocomplete="off"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div> <label for="fname" class="block text-sm mb-1 text-gray-700">First name (optional)</label> <input id="fname" name="firstName" type="text" class="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]" autocomplete="given-name"> </div> <div class="sm:col-span-2"> <label for="email" class="block text-sm mb-1 text-gray-700">Email</label> <input id="email" name="email" type="email" required class="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]" autocomplete="email"> </div> </div> <button type="submit" class="btn bg-[#8B0000] text-white font-medium px-6 py-3 rounded hover:bg-[#8B0000]/90 transition-colors w-full">
Subscribe
</button> <p id="mc-status" class="text-sm mt-3 text-center" role="status" aria-live="polite"></p> </form> <script>
    const form = document.getElementById('mc-form');
    const statusEl = document.getElementById('mc-status');
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusEl.textContent = "Submitting\u2026";
      const fd = new FormData(form);
      if (fd.get('company')) { statusEl.textContent = "Thanks!"; return; }
      const payload = {
        firstName: fd.get('firstName')?.toString().trim() || "",
        email: fd.get('email')?.toString().trim() || "",
      };
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        statusEl.textContent = data.message || (data.ok ? "Success." : "Error.");
        if (data.ok) form.reset();
      } catch {
        statusEl.textContent = "Couldn't submit right now.";
      }
    });
  <\/script> </section>`])), maybeRenderHead(), title);
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/components/Newsletter.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const videos = [
    { id: "IvFim5nfzvU", title: "Featured Performance" },
    { id: "grNgRgBwXlc", title: "Acoustic Session" },
    { id: "7RGB9T4TYN0", title: "Live at The Venue" },
    { id: "x_DsAjAxN_E", title: "Studio Recording" },
    { id: "0HA0ZRclY2g", title: "Behind the Scenes" },
    { id: "sopbXZJxrHY", title: "Music Video" },
    { id: "8tg0E9Xnyro", title: "Concert Highlights" }
  ];
  const tracks = [
    {
      title: "MOONDUST by Little Sparrow",
      label: "Moondust",
      src: "https://bandcamp.com/EmbeddedPlayer/track=2213498934/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
      link: "https://uklittlesparrow.bandcamp.com/track/moondust-2"
    },
    {
      title: "Tears by Little Sparrow",
      label: "Tears",
      src: "https://bandcamp.com/EmbeddedPlayer/track=2878828407/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
      link: "https://uklittlesparrow.bandcamp.com/track/tears-2"
    },
    {
      title: "Alone by Little Sparrow",
      label: "Alone",
      src: "https://bandcamp.com/EmbeddedPlayer/track=311730505/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
      link: "https://uklittlesparrow.bandcamp.com/track/alone"
    },
    {
      title: "Corner Of The Room by Little Sparrow",
      label: "Corner of the Room",
      src: "https://bandcamp.com/EmbeddedPlayer/track=2824004508/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
      link: "https://uklittlesparrow.bandcamp.com/track/corner-of-the-room"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Little Sparrow - Official Website", "description": "Official website of Little Sparrow - Music, Live Shows, and More" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section id="home" class="min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat pt-20 relative reveal" style="background-image: url('/images/hero-bg.jpg');"> <div class="absolute inset-0 bg-black/30"></div> <!-- Content positioned lower to showcase the artist --> <div class="container mx-auto px-4 max-w-6xl text-center relative z-10 pb-20"> <div class="mb-8"> <img src="/images/logo.png" alt="Little Sparrow" class="h-24 md:h-32 w-auto mx-auto"> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16"> <a href="#music" class="bg-[#8B0000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8B0000]/90 transition-colors inline-flex items-center gap-2"> <img src="/images/bird.png" alt="" aria-hidden="true" class="h-4 w-4 opacity-90">
Listen
</a> <a href="#live" class="bg-white text-[#8B0000] border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8B0000] hover:text-white transition-colors">
Shows
</a> <a href="#contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors">
Contact
</a> </div> </div> <!-- Scroll Arrow --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"> <a href="#music" class="text-white hover:text-white/80 transition-colors"> <svg class="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </a> </div> </section>  <section id="music" class="w-full max-w-none py-20 bg-gray-800 reveal"> <div class="px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl mb-8 text-center text-white font-bold"> <span>Music</span> </h2> </div> <div class="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"> ${tracks.map((track) => renderTemplate`${renderComponent($$result2, "BandcampCard", $$BandcampCard, { "title": track.title, "src": track.src, "label": track.label, "link": track.link })}`)} </div> </div> </section>  ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "Shows", $$Shows, {})}  <section id="videos" class="py-20 bg-black reveal"> <div class="w-full"> <div class="container mx-auto px-4 max-w-7xl mb-16"> <div class="text-center mb-16"> <h2 class="text-4xl mb-8 text-center text-white font-bold"> <span>Videos</span> </h2> </div> </div> <!-- Full Width Video Grid --> ${renderComponent($$result2, "VideoGrid", $$VideoGrid, { "videos": videos })} </div> </section>  <section id="contact" class="py-20 bg-white"> <div class="container mx-auto px-4 max-w-6xl"> <div class="text-center mb-12"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, {}, { "default": ($$result3) => renderTemplate`Contact` })} </div> <div class="max-w-2xl mx-auto text-center"> <p class="text-lg text-gray-700 mb-8">
Get in touch for bookings, collaborations, or just to say hello!
</p> <div class="mb-8"> <a href="mailto:uklittlesparrow@outlook.com" class="text-[#1b497b] text-xl font-semibold hover:text-[#1b497b]/80 transition-colors">
uklittlesparrow@outlook.com
</a> </div> <!-- Social Links --> <div class="flex justify-center space-x-8"> <a href="https://x.com/uklittlesparrow" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[#8B0000] transition-colors" aria-label="Twitter/X"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a href="https://www.youtube.com/user/uklittlesparrow" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[#8B0000] transition-colors" aria-label="YouTube"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> <a href="https://www.facebook.com/uklittlesparrow" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[#8B0000] transition-colors" aria-label="Facebook"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="https://uklittlesparrow.bandcamp.com/music" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[#8B0000] transition-colors" aria-label="Bandcamp"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path> <path d="M8 6h8v2H8zm0 2h8v2H8zm0 2h8v2H8zm0 2h8v2H8z"></path> </svg> </a> <a href="https://www.instagram.com/uklittlesparrow" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[#8B0000] transition-colors" aria-label="Instagram"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> </div> </div> </div> </section>  ${renderComponent($$result2, "Newsletter", $$Newsletter, { "title": "Subscribe for updates" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/pages/index.astro", void 0);

const $$file = "/Users/luca/WORKING FOLDER/WEBSITES/Little Sparrow/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
