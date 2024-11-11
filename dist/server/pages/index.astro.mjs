import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BKQvBf0X.mjs';
import { $ as $$Nav } from '../chunks/nav_BgULAXup.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "<main> ", ` <center> <br> <br> <br> <br> <p class="ex2" style="animation: fadeIn 2s;">Ghost</p> <p> <span style="animation: owo .5s;">Now</span> <span style="animation: owo 1s; animation-delay: .5s">Remade</span> <span style="animation: owo 1s; animation-delay: 1s; color: #f84545;">In</span> <span style="animation: owo 1s; animation-delay: 1.5s; color: #f84545;">Astro!</span> <span style="animation: owo 1s; animation-delay: 2s; color: #f84545;">:D</span> </p> <button class="button2" onclick="blank();">Open in About:blank</button> <button class="button2" onclick="search()">Search Something!</button> <div class="trendingtop"> <center> <h1>Recommended Games</h1> </center> </div> <div class="trendingbottom" id="trendingg"></div> <div class="trendingtop"> <center> <h1>Recommended Apps</h1> </center> </div> <div class="trendingbottom" id="trendinga"></div> </center> </main> <script src="/u/b.js" defer><\/script> <script src="/u/c.js" defer><\/script> <script>
		 let rgAPI = '/api/rg/v1/';
      //load g and a
      addEventListener("DOMContentLoaded", async (event) => {
        const gData = await fetch(rgAPI).then((response) => response.text()).then((text) => {return JSON.parse(text)});
        gData.forEach((game) => {
          const i = document.getElementById("trendingg");
          const g = document.createElement("div");
          g.classList.add("game-icon");
          g.setAttribute(
            "onclick",
            "localStorage.setItem('url', '" +
              '/u/query/' + __uv$config.encodeUrl(game.href) +
              "'); window.location.href = '/q/'",
          );
          

          const img = document.createElement("button");
          const image = document.createElement("img");
          image.src = game.img;

          const gname = document.createElement("p");
          gname.innerText = game.name;

          img.appendChild(image);
          g.appendChild(img);
          g.appendChild(gname);
          i.appendChild(g);
        });
      });
      //load g and a
      let raAPI = '/api/ra/v1/';
      addEventListener("DOMContentLoaded", async (event) => {
        const gData = await fetch(raAPI).then((response) => response.text()).then((text) => {return JSON.parse(text)});
        gData.forEach((game) => {
          const i = document.getElementById("trendinga");

          const g = document.createElement("div");
          g.classList.add("game-icon");
          g.setAttribute(
            "onclick",
            "localStorage.setItem('url', '" +
              '/u/query/' + __uv$config.encodeUrl(game.href) +
              "'); window.location.href = '/q/'",
          );
          

          const img = document.createElement("button");
          const image = document.createElement("img");
          image.src = game.img;

          const gname = document.createElement("p");
          gname.innerText = game.name;

          img.appendChild(image);
          g.appendChild(img);
          g.appendChild(gname);
          i.appendChild(g);
        });
      });
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomLink() {
        let csites = [
          "https://google.com",
          "https://classroom.google.com",
          "https://docs.google.com",
          "https://nasa.gov",
          "https://desmos.com",
          "https://clever.com",
          "https://ixl.com",
        ] 
        return csites[getRandomInt(0, csites.length-1)]
      }
      function blank() {
        var currentUrl = top.location.href;
        if (currentUrl === "about:blank") {
          console.log(currentUrl);
        } else {
          var win = window.open();
          var url = "/";
          var iframe = win.document.createElement("iframe");
          top.location.replace(getRandomLink());
          iframe.style.position = "fixed";
          iframe.style.top = 0;
          iframe.style.bottom = 0;
          iframe.style.left = 0;
          iframe.style.right = 0;
          iframe.style.border = "none";
          iframe.style.outline = "none";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.src = url;

          win.document.body.appendChild(iframe);
        }
      }

     function search() {
    window.location.href = '/b/'       
    }
	<\/script> `])), maybeRenderHead(), renderComponent($$result2, "Nav", $$Nav, { "title": "", "body": "", "href": "" })) })}`;
}, "/home/nobodycares/Downloads/ghost-astro/src/pages/index.astro", void 0);

const $$file = "/home/nobodycares/Downloads/ghost-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
