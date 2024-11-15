import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B1_d9anC.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CzykWKfA.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/nobodycares/Documents/GitHub/Ghost-Astro/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"}],"routeData":{"route":"/a","isIndex":false,"type":"page","pattern":"^\\/a\\/?$","segments":[[{"content":"a","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a.astro","pathname":"/a","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"}],"routeData":{"route":"/ag","isIndex":false,"type":"page","pattern":"^\\/ag\\/?$","segments":[[{"content":"ag","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ag.astro","pathname":"/ag","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"}],"routeData":{"route":"/b","isIndex":false,"type":"page","pattern":"^\\/b\\/?$","segments":[[{"content":"b","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/b.astro","pathname":"/b","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";*{font-family:Be Vietnam Pro}body{background:linear-gradient(135deg,#1e1e2e,#534158);overflow:hidden;margin:0}.input{width:50%;height:15px;background-color:var(--Secondary-Color);color:#fff;border:none;border-radius:5px;padding:10px;margin-top:3px!important;font-family:Be Vietnam Pro,sans-serif;display:inline}\n"}],"routeData":{"route":"/q","isIndex":false,"type":"page","pattern":"^\\/q\\/?$","segments":[[{"content":"q","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/q.astro","pathname":"/q","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"}],"routeData":{"route":"/s","isIndex":false,"type":"page","pattern":"^\\/s\\/?$","segments":[[{"content":"s","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/s.astro","pathname":"/s","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/a.MWVCOm3i.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/a.astro",{"propagation":"none","containsHead":true}],["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/ag.astro",{"propagation":"none","containsHead":true}],["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/b.astro",{"propagation":"none","containsHead":true}],["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/q.astro",{"propagation":"none","containsHead":true}],["/home/nobodycares/Documents/GitHub/Ghost-Astro/src/pages/s.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/a@_@astro":"pages/a.astro.mjs","\u0000@astro-page:src/pages/ag@_@astro":"pages/ag.astro.mjs","\u0000@astro-page:src/pages/b@_@astro":"pages/b.astro.mjs","\u0000@astro-page:src/pages/q@_@astro":"pages/q.astro.mjs","\u0000@astro-page:src/pages/s@_@astro":"pages/s.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/nobodycares/Documents/GitHub/Ghost-Astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B0ACZSZ7.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/a.MWVCOm3i.css","/favicon.ico","/assets/font.woff2","/js/astro.js","/js/cosmos.js","/js/galaxy.js","/u/astro.js","/u/constallations.js","/u/handoff.js","/u/liftoff.js","/u/space.js","/u/sw.js","/assets/img/canvas.png","/assets/img/classroom.png","/assets/img/desmos.png","/assets/img/docs.png","/assets/img/drive.png","/assets/img/ghost.png","/assets/img/apps/amazon.png","/assets/img/apps/bing.png","/assets/img/apps/cai.png","/assets/img/apps/chat.png","/assets/img/apps/cmg2.png","/assets/img/apps/crazygames.png","/assets/img/apps/ddg.png","/assets/img/apps/discord.jpg","/assets/img/apps/fig.png","/assets/img/apps/geforce.png","/assets/img/apps/gem.png","/assets/img/apps/github.png","/assets/img/apps/gmail.png","/assets/img/apps/jmw.png","/assets/img/apps/nowgg2.png","/assets/img/apps/pintrest.png","/assets/img/apps/replit.png","/assets/img/apps/scratch.png","/assets/img/apps/spotify2.png","/assets/img/apps/tiktok.jpg","/assets/img/apps/twitch.png","/assets/img/apps/vscode2.png","/assets/img/apps/x.png","/assets/img/apps/xbox.png","/assets/img/apps/yahoo.png","/assets/img/apps/youtube.png","/assets/img/apps/youtubem.png","/assets/img/assets/1.png","/assets/img/assets/10 min.png","/assets/img/assets/100ng.jpg","/assets/img/assets/10min.png","/assets/img/assets/1o1football.png","/assets/img/assets/1on1.png","/assets/img/assets/1v1.png","/assets/img/assets/1v1space.png","/assets/img/assets/2048.png","/assets/img/assets/8ball.png","/assets/img/assets/OvO.png","/assets/img/assets/OvO2.png","/assets/img/assets/achievementunlocked.png","/assets/img/assets/acorn.jpg","/assets/img/assets/acunlocked2.png","/assets/img/assets/adarkroom.png","/assets/img/assets/adrenalinechallenge.jpg","/assets/img/assets/adventure.png","/assets/img/assets/alien.png","/assets/img/assets/alienhominid.png","/assets/img/assets/amidsttheclouds.png","/assets/img/assets/amongus.png","/assets/img/assets/angrybirds.png","/assets/img/assets/angrysharks.png","/assets/img/assets/aquaparkslides.png","/assets/img/assets/arcane.png","/assets/img/assets/astray.png","/assets/img/assets/atank.png","/assets/img/assets/avalanche.png","/assets/img/assets/awesometanks2.jpg","/assets/img/assets/backrooms.jpg","/assets/img/assets/backrooms.png","/assets/img/assets/bad-ice-cream-2.png","/assets/img/assets/bad-ice-cream-3.png","/assets/img/assets/bad-ice-cream.png","/assets/img/assets/badtimesimulator.png","/assets/img/assets/baldi.png","/assets/img/assets/ballisticchickens.png","/assets/img/assets/basketball-stars.png","/assets/img/assets/basketball.jpeg","/assets/img/assets/basketbros.png","/assets/img/assets/basketrandom.png","/assets/img/assets/battleforgondor.JPG","/assets/img/assets/big.png","/assets/img/assets/bigredbutton.png","/assets/img/assets/bitlife.png","/assets/img/assets/black.png","/assets/img/assets/blackholesquare.png","/assets/img/assets/blackknight.png","/assets/img/assets/block.png","/assets/img/assets/bloonstd.jpg","/assets/img/assets/bloonstd2.png","/assets/img/assets/bloxorz.png","/assets/img/assets/bntts.png","/assets/img/assets/bob.jpeg","/assets/img/assets/bob.png","/assets/img/assets/bobr.png","/assets/img/assets/box.jpg","/assets/img/assets/boxhead2play.jpg","/assets/img/assets/breakingthebank.png","/assets/img/assets/bruger.png","/assets/img/assets/btd.png","/assets/img/assets/btd1.png","/assets/img/assets/btr2.png","/assets/img/assets/burger.png","/assets/img/assets/burgerandfrights.png","/assets/img/assets/cannonbasketball4.png","/assets/img/assets/canyondefense.png","/assets/img/assets/car.png","/assets/img/assets/carssimulator.png","/assets/img/assets/cat.png","/assets/img/assets/cellmachine.png","/assets/img/assets/championarcher.png","/assets/img/assets/championisland.png","/assets/img/assets/chicken.png","/assets/img/assets/circlo.png","/assets/img/assets/clusterrush.png","/assets/img/assets/conflict.jpg","/assets/img/assets/connect3.png","/assets/img/assets/cookie1.jpeg","/assets/img/assets/craftmine.png","/assets/img/assets/creativekillchamber.jpg","/assets/img/assets/crossyroad.png","/assets/img/assets/csgo.png","/assets/img/assets/ctrholiday.png","/assets/img/assets/cubefield.png","/assets/img/assets/cutrope.png","/assets/img/assets/cuttherope.png","/assets/img/assets/darkroom.png","/assets/img/assets/deal.jpg","/assets/img/assets/dino.png","/assets/img/assets/doge.png","/assets/img/assets/doge2048.jpeg","/assets/img/assets/dogeminer.png","/assets/img/assets/dogeminer2.png","/assets/img/assets/dogeminer_300x300.png","/assets/img/assets/doodle.png","/assets/img/assets/doom.png","/assets/img/assets/doom2.png","/assets/img/assets/doublewires.png","/assets/img/assets/driftboss.png","/assets/img/assets/drivemad.png","/assets/img/assets/ducklife.png","/assets/img/assets/dwtd.png","/assets/img/assets/edging.png","/assets/img/assets/eman.png","/assets/img/assets/exo.jpg","/assets/img/assets/fire.png","/assets/img/assets/flappybird.png","/assets/img/assets/fnf.png","/assets/img/assets/funnyshooter.png","/assets/img/assets/game.png","/assets/img/assets/geodash.png","/assets/img/assets/hackertyper.png","/assets/img/assets/happywheels.png","/assets/img/assets/helixjump.png","/assets/img/assets/hexgl.png","/assets/img/assets/hobo1.png","/assets/img/assets/hobo2.png","/assets/img/assets/hobo3.png","/assets/img/assets/hobo4.png","/assets/img/assets/hobo5.png","/assets/img/assets/hobo6.png","/assets/img/assets/hobo7.png","/assets/img/assets/holeio.png","/assets/img/assets/icraft.png","/assets/img/assets/idk.png","/assets/img/assets/impossiblequiz.png","/assets/img/assets/jellytruck.png","/assets/img/assets/jetpack.png","/assets/img/assets/justoneboss.png","/assets/img/assets/krunkerio.png","/assets/img/assets/land.png","/assets/img/assets/lofi.png","/assets/img/assets/logo-4.png","/assets/img/assets/minecraft.png","/assets/img/assets/monkeymart.png","/assets/img/assets/motox3m.png","/assets/img/assets/motox3m2.png","/assets/img/assets/osu.png","/assets/img/assets/papascupcakearia.png","/assets/img/assets/physibox.png","/assets/img/assets/pkick.png","/assets/img/assets/pokemonecrystal.png","/assets/img/assets/pokemongold.png","/assets/img/assets/portal.png","/assets/img/assets/pr_source.png","/assets/img/assets/rainbowtower.png","/assets/img/assets/red.png","/assets/img/assets/retroarch.png","/assets/img/assets/retrobowl.png","/assets/img/assets/roblox.png","/assets/img/assets/run3.png","/assets/img/assets/santa.png","/assets/img/assets/shark.png","/assets/img/assets/shock.png","/assets/img/assets/shoot.png","/assets/img/assets/slope.png","/assets/img/assets/sm64.png","/assets/img/assets/smrun.png","/assets/img/assets/spacewars.png","/assets/img/assets/square.png","/assets/img/assets/stickmangolf.png","/assets/img/assets/stickmanhook.png","/assets/img/assets/stickmansurvival.png","/assets/img/assets/stumble.png","/assets/img/assets/subwaysurfers.png","/assets/img/assets/tag.png","/assets/img/assets/tank.jpg","/assets/img/assets/thereisnogame.png","/assets/img/assets/thumb.jpg","/assets/img/assets/truck.png","/assets/img/assets/trun.png","/assets/img/assets/unnamed.png","/assets/img/assets/van.png","/assets/img/assets/vex5.png","/assets/img/assets/vex6.png","/assets/img/assets/vex7.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"7c5b28AItQAChM9euVGwhBsqod8b0iDLqoWCUFiIFzw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
