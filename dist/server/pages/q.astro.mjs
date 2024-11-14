import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_z4vBhUTq.mjs';
/* empty css                             */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Q = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">', `<script>
    const frame = document.getElementById('frame')
    const form = document.getElementById('forminput')
    const topbar = document.getElementById('topbar')
    localStorage.setItem('nav', '0')
    const nav = document.getElementById('topbar')
    const navbttn = document.getElementById('navbttn1')
    const uvurl = localStorage.getItem('url')
    const spanel = document.getElementById('spanel')
    const panelbttn = document.getElementById('panelbttn')
    const uvpanel = document.getElementById('uvpanel')
    const panel2bttn = document.getElementById('pnlbttn')
    const url = localStorage.getItem('url')
    const input = document.querySelector('.search')
    const stockSWv2 = '/u/sw.js'
    const barbutton = document.getElementById('barButton')
    const iframe = document.getElementById('frame')

    document.addEventListener('DOMContentLoaded', (event) => {
        LoadURL()
    })

    function closeTopbar() {
        iframe.classList.remove('mainframe')
        iframe.classList.add('iframe')
        topbar.classList.remove('topbar')
        topbar.classList.add('hiddenbar')
        barbutton.classList.remove('barbutton')
        barbutton.classList.add('showbutton')
    }

    function home() {
        window.location.href = '/'
    }

    function openTopbar() {
        barbutton.classList.remove('showbutton')
        barbutton.classList.add('barbutton')
        iframe.classList.remove('iframe')
        iframe.classList.add('mainframe')
        topbar.classList.remove('hiddenbar')
        topbar.classList.add('topbar')
    }

    function copyurl() {
        const copybttn = document.getElementById('copybttn')
        navigator.clipboard.writeText(frame.src)
        copybttn.textContent = 'Copied!'
        setTimeout("copybttn.textContent = 'Copy URL'", 3000)
    }

    function refresh() {
        iframe.src = frame.src
    }

    function back() {
        iframe.contentWindow.history.back()
    }

    function forward() {
        iframe.contentWindow.history.forward()
    }

    //jank!!!

    function setURL() {
        frame.contentWindow.window.open = function (
            url,
            windowName,
            windowFeatures
        ) {
            iframe.src = '/u/query/' + __uv$config.encodeUrl(url)
        }
        const geturl = frame.contentWindow.location.href
        const removedUrl = geturl.replace(
            'https://' + location.hostname + '/u/query/',
            ''
        )
        const decodedURL = __uv$config.decodeUrl(removedUrl)
        form.value = decodedURL
        localStorage.setItem('url', frame.src)
    }

    setInterval(function () {
        setURL()
    }, 3000)

    function LoadURL() {
        frame.src = url
    }

    function openswitchpanel() {
        uvpanel.classList.remove('hiddenuvpanel')
        uvpanel.classList.add('uvpanel')
        panelbttn.setAttribute('onclick', 'closeswitchpanel()')
    }

    function closeswitchpanel() {
        uvpanel.classList.remove('uvpanel')
        uvpanel.classList.add('hiddenuvpanel')
        panelbttn.setAttribute('onclick', 'openswitchpanel()')
    }

    function op() {
        var win = window.open()
        var url = '/q/'
        var iframe = win.document.createElement('iframe')
        iframe.style.position = 'fixed'
        iframe.style.top = 0
        iframe.style.bottom = 0
        iframe.style.left = 0
        iframe.style.right = 0
        iframe.style.border = 'none'
        iframe.style.outline = 'none'
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.src = url

        win.document.body.appendChild(iframe)
    }

    function rammer() {
        //for later
    }
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Google Classroom" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<button class="barbutton" id="barButton" onclick="openTopbar()"><span class="material-symbols-outlined">arrow_downward</span></button><div class="topbar" id="topbar" style="color: black;"><div class="topbar-content"><button class="topbtn" id="topbttn" onclick="closeTopbar()"><span class="material-symbols-outlined" style="color: var(--Symbols-Color)">
arrow_upward
</span></button><button class="topbtn" id="panelbttn" onclick="openswitchpanel()"><span class="material-symbols-outlined" style="color: var(--Symbols-Color)">
page_info
</span></button><button class="topbtn" id="fwdbttn" onclick="forward()" style="left: 10px;"><span class="material-symbols-outlined" style="color: var(--Symbols-Color);">
arrow_forward
</span></button><button class="topbtn" id="rfshbttn" onclick="refresh()" style="left: 30px;"><span class="material-symbols-outlined" style="color: var(--Symbols-Color)">
refresh
</span></button><button class="topbtn" id="bckbttn" onclick="back()" style="left: 30px;"><span class="material-symbols-outlined" style="color: var(--Symbols-Color)">
arrow_back
</span></button><button class="topbtn" id="bckbttn" onclick="home()" style="left: 30px;"><span class="material-symbols-outlined" style="color: var(--Symbols-Color)">
home
</span></button><input type="text" class="input" id="forminput" placeholder="Search Or Enter A URL.."></div></div><div class="hiddenuvpanel" id="uvpanel"><button class="rammerbttn" id="rammerbttn" onclick="rammer()">Use Rammerhead</button><button class="copybttn" id="copybttn" onclick="copyurl()">Copy URL</button><button class="topbtn" id="opbttn" onclick="op()" style="left: 30px; margin-top: 10px;"><span class="material-symbols-outlined"> open_in_new</span></button></div><iframe class="mainiframe" id="frame"></iframe>` }));
}, "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/q.astro", void 0);

const $$file = "/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/q.astro";
const $$url = "/q";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Q,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
