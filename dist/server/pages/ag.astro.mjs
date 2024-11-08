import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cr_hehKx.mjs';
import { $ as $$Nav } from '../chunks/nav_-chI5du2.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Ag = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script src="/u/b.js" defer><\/script> <script src="/u/c.js" defer><\/script> <script>
    let gAPI = '/api/g/v1/';
    addEventListener("DOMContentLoaded", async (event) => {
        const gData = await fetch(gAPI).then((response) => response.text()).then((text) => {return JSON.parse(text)});
        gData.forEach(game => {
            const gameicons = document.getElementById('gcontainer')

            const games = document.createElement('div')
            games.classList.add('game-icon')
            games.setAttribute('onclick', "localStorage.setItem('url', '" + __uv$config.prefix + __uv$config.encodeUrl(game.href) + "'); window.location.href = '/q/'")

            const gameimg = document.createElement('button')
            const gameimage = document.createElement('img')
            gameimage.src = game.img

            const gamename = document.createElement('p')
            gamename.innerText = game.name;

            gameimg.appendChild(gameimage);
            games.appendChild(gameimg);
            games.appendChild(gamename);
            gameicons.appendChild(games);
        })
    });
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "title": "", "body": "", "href": "" })} ${maybeRenderHead()}<center> <br> <br> <br> <br> <p class="ex2" style="animation: fadeIn 2s;">Ga<x>me</x>s</p> <p>You can request games on the <a href="https://discord.gg/dbyDXfs5dN">Dis<x>co</x>rd serv<x>er</x></a></p> <div class="gcontainer" id="gcontainer"></div> </center> ` }));
}, "/home/nobodycares/Downloads/ghost-astro/src/pages/ag.astro", void 0);

const $$file = "/home/nobodycares/Downloads/ghost-astro/src/pages/ag.astro";
const $$url = "/ag";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ag,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
