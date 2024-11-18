import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CivkMUVJ.mjs';
import { $ as $$Nav } from '../chunks/nav_B_3ycToN.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$W = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<center> <br> <br> <br> <p class="ex2"> <img id="logo2" src="/assets/img/ghost.png" height="200"> </p> <p class="ex3">Ghost Sea<span>rch</span></p> <h2><span id="subtitle">loading...</span></h2> <input type="text" id="input" class="input" placeholder="Search or enter a URL.."> </center> <script>
        function changeSub(num) {
            document.getElementById('subtitle').innerText = tell[num]
        }

        var tell = [
            'Nobodycares is a skiddy kid af',
            'What even is that?',
            'You need help',
            'Ghost is crazy',
            'CoolOnlineGames',
            'ur funny',
            'LOL',
            'got taken down fr fr',
            'help me',
            ' go crazy right now',
            'made by a student (crazy right)',
            'i got a glock in my rari',
            'gren',
            'griddy',
            'and im kanye west',
            'David is the best',
            'Ghost on crack!',
            'astro on crack fr',
            '76.138.200.152 (your ip)',
            'Free for all',
            'A wise man once told me to use Ghost',
            'i need starz plz https://github.com/The-Ghost-Network/Ghost-Node',
            'I Code Cool Stuff :D',
            'Jordan was here \u{1F631} (creator of jordansmathwork)',
            'Ghost was skidded - Clipped',
            'JMW is cool',
            'cube gang',
            'blanket????',
            'this is the rarest one (real)',
            'NO THIS IS THE RAREST ONE!!!',
            'how many of these are there????',
            'Thanks to PBS Kids for the code!',
            'hes not real (dont trust him)',
            'BLU GHOST???',
            'Get on my level!',
            'skill issue',
            'not my fault',
            'the skiddiest site youve ever seen',
        ]

        var howmany = tell.length
        var randomIndex = Math.floor(Math.random() * howmany)

        document.getElementById('subtitle').innerText = tell[randomIndex]

        function changeSplash(num) {
            var sub = 'guh ' + num + ', ' + tell[num]
            document.getElementById('subtitle').innerText = tell[num]
            return sub
        }
    <\/script> `])), renderComponent($$result2, "Nav", $$Nav, { "body": "", "href": "", "title": "" }), maybeRenderHead()) })}`;
}, "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/w.astro", void 0);

const $$file = "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/w.astro";
const $$url = "/w";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$W,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
