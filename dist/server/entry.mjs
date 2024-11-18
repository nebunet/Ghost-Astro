import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C1LAVc87.mjs';
import { manifest } from './manifest_BQMcIPBm.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a.astro.mjs');
const _page2 = () => import('./pages/ag.astro.mjs');
const _page3 = () => import('./pages/b.astro.mjs');
const _page4 = () => import('./pages/q.astro.mjs');
const _page5 = () => import('./pages/s.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/a.astro", _page1],
    ["src/pages/ag.astro", _page2],
    ["src/pages/b.astro", _page3],
    ["src/pages/q.astro", _page4],
    ["src/pages/s.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///home/nobodycares/Documents/GitHub/Ghost-Astro/dist/client/",
    "server": "file:///home/nobodycares/Documents/GitHub/Ghost-Astro/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
