import { c as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, b as createAstro } from './astro/server_CzykWKfA.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                     */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="A Pretty Cool Site :D"><meta name="viewport" content="width=device-width"><link rel="icon" id="favicon" type="image/svg+xml" href="/img/ghost.png"><title>Ghost</title><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-WFWKKRRXLT"><\/script><script>
         window.dataLayer = window.dataLayer || [];

         function gtag() {
             dataLayer.push(arguments);
         }
         gtag('js', new Date());

         gtag('config', 'G-WFWKKRRXLT');
     <\/script><script src="/u/b.js" defer><\/script><script src="/u/c.js" defer><\/script><script src="/js/load.js"><\/script>`, "</head> <body> ", "  </body></html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/nobodycares/Downloads/ghost-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
