import { createBareServer } from '@tomphttp/bare-server-node';
import http from 'node:http';
import express from 'express';
import g from './serverlib/games.mjs';
import a from './serverlib/apps.mjs';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import fetch from "node-fetch";
import { server as wisp } from "@mercuryworkshop/wisp-js";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { createRammerhead, shouldRouteRh, routeRhUpgrade, routeRhRequest } from '@rubynetwork/rammerhead';
import fs from "node:fs";

const server = http.createServer();
const bare = createBareServer('/kitty/');
const PORT = 8080; //dont change the port i will find you
const app = express();
const __dirname = process.cwd();
const base = '/';

const rh = createRammerhead({
  logLevel: 'debug', 
  reverseProxy: false, 
  disableLocalStorageSync: false, 
  disableHttp2: false 
})

//https://en.wikipedia.org/wiki/Epoxy
app.use("/bussin/", express.static(epoxyPath));
app.use("/whatthesigma/", express.static(baremuxPath));
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

server.on('request', (req, res) => {
  if (shouldRouteRh(req)) {
    routeRhRequest(rh , req, res)
}else if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res)
    } else {
        app(req, res)
    }
})

server.on('upgrade', (req, socket, head) => {
  if (shouldRouteRh(req)) {
    routeRhUpgrade(rh , req, socket, head)
}else if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head)
    } else {
        wisp.routeRequest(socket, head);
    }
})

app.use(express.static(__dirname + '/public'))

app.get('/api/info/v1/', (req, res) => {
    res.json([
        {
            Version: '1.6.50',
        },
    ])
})

//if your in here then you are either a skid or just wondering how this works 
//either way get out :3

  app.get("/api/icons/v1/", async (req, res) => {
    const url = req.query.url;

    let img = await fetch(`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`)
    const data = await img.buffer();


    res.set("Content-Type", "image/jpeg");
    res.send(data);
  });

  app.get("/api/search/v1/", async (req, res) => {
    const query = req.query.query;
    let qq = await fetch(`https://duckduckgo.com/ac/?q=${query}&kl=wt-wt`)
    console.log(qq);
    let data = qq.json();
    res.json(data)
  })
  

  app.get("/api/fl/lightspeed/v1/", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/api/fl/lightspeed/v1/?url=${url}`)
    let d = await r.json() 
    res.json(d)
  });
  
  app.get("/api/fl/fortigaurd/v1/", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/api/fl/fortigaurd/v1/?url=${url}`)
    let d = await r.json() 
    res.json(d)
  });
  
  app.get("/api/fl/paloalto/v1", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/api/fl/paloalto/v1/?url=${url}`)
    let d = await r.json() 
    res.json(d)
  });
  
  app.get("/api/fl/blocksi/v1/", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/api/fl/blocksi/v1/?url=${url}`)
    let d = await r.json() 
    res.json(d)
  });


  app.post("/api/completions", async (req, res) => {
    const query = req.body.query;
    let r = await fetch(`https://api.ozone-ai.com/v1/chat/completions`, {
        //you NEED an ozone ai key to be able to fetch from it
        headers: {
            "Authorization": apikey
        }
    })
  })


var sg = []
var sa = []
function getrand() {
    sg.splice(0, sg.length)
    for (var i = 0; i < 7; i++) {
        var rg = g.length
        var random = Math.floor(Math.random() * rg)
        if (!sg.includes(g[random])) {
            sg.push(g[random])
        } else {
            i--
        }
    }
}

function getrandapps() {
    sa.splice(0, sa.length)
    for (var i = 0; i < 7; i++) {
        var ra = a.length
        var random = Math.floor(Math.random() * ra)
        if (!sa.includes(a[random])) {
            sa.push(a[random])
        } else {
            i--
        }
    }
}

setInterval(getrand, 500000)
setInterval(getrandapps, 500000)
getrand()
getrandapps()


app.get('/api/rg/v1/', (req, res) => {
    res.json(sg)
});

app.get('/api/ra/v1/', (req, res) => {
    res.json(sa)
});

app.post('/api/hot/v1/', (req, res) => {
    const game = req.query.gameid;

    if(!game) {
       return res.send(400).json(`{"detail": "Method Not Allowed"}`)
    }

    
});

server.listen(PORT)

server.on('listening', () => {
    console.log(
        'Thanks for using Ghost! The server is located on the link below! :3'
    )
    console.log('http://localhost:' + PORT)
})

// SIGMA SHUTDOWN
server.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        debug('HTTP server closed')
    })
})
