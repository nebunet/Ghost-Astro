import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_z4vBhUTq.mjs';
import { $ as $$Nav } from '../chunks/nav_D5a6x_m3.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$S = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghost" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<center> <br> <br> <br> <br> <p class="ex2">Settings</p> <div class="settingsdisplay"> <div class="settingspanel"> <center> <h1>Themes</h1> <button class="button1" onclick="theme1()">Catppuccin</button> <button onclick="theme2()" class="button1">Ghost</button> <button onclick="theme4()" class="button1">Pink (Light)</button> <button onclick="theme5()" class="button1">Blue (Light)</button> <button onclick="theme6()" class="button1">Green (Light)</button> <button onclick="theme7()" class="button1">Green (Dark)</button> <button onclick="theme8()" class="button1">Pink (Dark)</button> <button onclick="theme9()" class="button1">Blue(Dark)</button> <button onclick="theme10()" class="button1">Purple</button> </center> </div> <div class="settingspanel"> <center> <h2>Cloak</h2> <button class="button1" onclick="icondocs()">Google Docs</button> <button class="button1" onclick="icondrive()">Google Drive</button> <button class="button1" onclick="icondesmos()">Desmos</button> <button class="button1" onclick="iconcanvas()">
Canvas</button> <button class="button1" onclick="iconclass()">
Google Classroom</button> </center> </div> <div class="settingspanel"> <center> <h2>Anti Tab Close</h2> <label class="switch"> <input type="checkbox" id="close"> <span class="slider round" onclick="noleave()"></span> </label> <h1>Panic Key</h1> <button class="button1" onclick="recordkey()">Record Key</button> </center> </div> <div class="settingsdisplay2"> <div class="settingspanel"> <center> <h2>Search Engine</h2> <select class="engines" id="engineSWITCHER"> <option value="https://www.google.com/search?=">Google</option> <option value="https://www.bing.com/search?form=&q=">Bing</option> <option value="https://duckduckgo.com/?t=h_&q=">DuckDuckGo</option> <option value="https://search.brave.com/search?q=">Brave</option> </select> </center> </div> <div class="settingspanel"> <center> <h2>Auto About:Blank</h2> <label class="switch"> <input type="checkbox" id="abt"> <span class="slider round" onclick="abt()"></span> </label> <h2>Click Off Tab Cloaking</h2> <label class="switch"> <input type="checkbox" id="clickoff"> <span class="slider round" onclick="clickoff()" id="cloak"></span> </label> </center> </div> <script src="/js/cosmos.js?req=8bd2s-aj3m&id=8fba1md-km28xz"><\/script> <script>
                        addEventListener('DOMContentLoaded', (event) => {
                            const ads = localStorage.getItem('ads')
                            const abtt = localStorage.getItem('blanker')
                            const click = localStorage.getItem('clickoff')
                            const tabs = localStorage.getItem('tabs')
                            const close = localStorage.getItem('leave')
                            if (tabs === 'on') {
                                const tab = document.getElementById('tabs')
                                tab.id.checked = 'true'
                            }

                            if (ads === 'on') {
                                const ad = document.getElementById('ads')
                                ad.id.checked = 'true'
                            }

                            if (abtt === 'on') {
                                const bl = document.getElementById('abt')
                                bl.id.checked = 'true'
                            }
                            if (click === 'true') {
                                const clickoff =
                                    document.getElementById('clickoff')
                                clickoff.id.checked = 'true'
                            }
                            if (close === 'on') {
                                const leave = document.getElementById('close')
                                leave.id.checked = 'true'
                            }
                            console.log('loaded setting!')
                        })
                    <\/script> </div> </div> </center>`])), renderComponent($$result2, "Nav", $$Nav, { "body": "", "href": "", "title": "" }), maybeRenderHead()) })} `;
}, "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/s.astro", void 0);

const $$file = "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/s.astro";
const $$url = "/s";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$S,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
