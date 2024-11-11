import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BKQvBf0X.mjs';
import { $ as $$Nav } from '../chunks/nav_BgULAXup.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$B = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<center> <br> <br> <br> <p class="ex2"><img id="logo2" src="/assets/img/ghost.png" height="200"></p> <p class="ex3">Ghost Sea<span>rch</span></p> <h2><span id="subtitle">loading...</span></h2> <input type="text" id="input" class="input" placeholder="Search or enter a URL.."> </center> <script>\n            function changeSub(num) {\n                document.getElementById("subtitle").innerText = tell[num];\n            }\n\n            var tell = [\n                "Nobodycares is a skiddy kid af",\n                "What even is that?",\n                "You need help",\n                "Ghost is crazy",\n                "CoolOnlineGames",\n                "ur funny",\n                "LOL",\n                "got taken down fr fr",\n                "help me",\n                " go crazy right now",\n                "made by a student (crazy right)",\n                "i got a glock in my rari",\n                "gren",\n                "corruptedgaming.online",\n                "griddy",\n                "im kanye west",\n                "David is the best",\n                "Ghost on crack!",\n                "astro on crack fr",\n                "76.138.200.152 (your ip)",\n                "Free for all",\n                "A wise man once told me to use Ghost",\n                "i need starz plz https://github.com/The-Ghost-Network/Ghost-Node",\n                "I Code Cool Stuff :D",\n                "Jordan was here \u{1F631} (creator of jordansmathwork)",\n                "Ghost was skidded - Clipped",\n                "JMW is cool",\n                "cube gang",\n                "blanket????",\n                "this is the rarest one (real)",\n                "NO THIS IS THE RAREST ONE!!!",\n                "how many of these are there????",\n                "Thanks to PBS Kids for the code!",\n                "hes not real (dont trust him)",\n                "BLU GHOST???",\n                "Get on my level!",\n                "skill issue",\n                "not my fault",\n                "the skiddiest site youve ever seen"\n            ];\n\n            var howmany = tell.length;\n            var randomIndex = Math.floor(Math.random() * howmany);\n\n            document.getElementById("subtitle").innerText = tell[randomIndex];\n\n            function changeSplash(num) {\n                var sub = "guh " + num + ", " + tell[num];\n                document.getElementById("subtitle").innerText = tell[num];\n                return sub;\n            }\n        <\/script> '])), renderComponent($$result2, "Nav", $$Nav, { "body": "", "href": "", "title": "" }), maybeRenderHead()) })}`;
}, "/home/nobodycares/Downloads/ghost-astro/src/pages/b.astro", void 0);

const $$file = "/home/nobodycares/Downloads/ghost-astro/src/pages/b.astro";
const $$url = "/b";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$B,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
