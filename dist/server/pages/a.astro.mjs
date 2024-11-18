import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DNHn7999.mjs';
import { $ as $$Nav } from '../chunks/nav_D5a6x_m3.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$A = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<center> <br> <br> <br> <br> <p class="ex2" style="animation: fadeIn 2s;">Ap<x>p</x>s</p> <p>
You can request games on the <a href="https://discord.gg/dbyDXfs5dN">Dis<x>co</x>rd serv<x>er</x></a> </p> <div class="acontainer" id="acontainer"></div> </center> <script>
        addEventListener('DOMContentLoaded', async (event) => {
            let aAPI = '/api/a/v1/'
            const gData = await fetch(aAPI)
                .then((response) => response.text())
                .then((text) => {
                    return JSON.parse(text)
                })
            gData.forEach((game) => {
                const gameicons = document.getElementById('acontainer')

                const games = document.createElement('div')
                games.classList.add('game-icon')
                games.setAttribute(
                    'onclick',
                    "localStorage.setItem('url', '" +
                        __uv$config.prefix +
                        __uv$config.encodeUrl(game.href) +
                        "'); window.location.href = '/q/'"
                )

                const gameimg = document.createElement('button')
                const gameimage = document.createElement('img')
                gameimage.src = game.img

                const gamename = document.createElement('p')
                gamename.innerText = game.name

                gameimg.appendChild(gameimage)
                games.appendChild(gameimg)
                games.appendChild(gamename)
                gameicons.appendChild(games)
            })
        })
    <\/script> `])), renderComponent($$result2, "Nav", $$Nav, { "title": "", "body": "", "href": "" }), maybeRenderHead()) })}`;
}, "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/a.astro", void 0);

const $$file = "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/a.astro";
const $$url = "/a";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$A,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
