import { createBareServer } from '@tomphttp/bare-server-node';
import http from 'node:http';
import * as https from 'https';
import express from 'express';
import g from './serverlib/games.mjs';
import a from './serverlib/apps.mjs';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import fetch from "node-fetch";
import { server as wisp } from "@mercuryworkshop/wisp-js";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { SocksProxyAgent } from 'socks-proxy-agent';

// fuck them ad companies
wisp.options.dns_method = "resolve";
wisp.options.dns_servers = ["1.1.1.3", "1.0.0.3", "94.140.14.14"]; // porn blocking and ad blocking
wisp.options.dns_result_order = "ipv4first";


const server = http.createServer();
const bare = createBareServer('/b/');

const PORT = 1921; // why is the port.. that
const app = express();
const __dirname = process.cwd();
const base = '/';

const socksProxyAgent = new SocksProxyAgent(
	`socks://127.0.0.1:${process.env.TOR_PORT || '8090'}`,
);
// todo: fix this hot mess
const torBare = createBareServer('/tbare/', {
    //httpAgent: socksProxyAgent,
	//httpsAgent: socksProxyAgent,
})

//https://en.wikipedia.org/wiki/Epoxy
app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);
//why do we still use bare lmao
server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res)
    } else if (torBare.shouldRoute(req)) { 
        torBare.routeRequest(req, res)
    } else {
        app(req, res)
    }
})


server.on('upgrade', (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head)
    } else if (torBare.shouldRoute(req)) {
        torBare.routeUpgrade(req, socket, head)
    } else {
        wisp.routeRequest(socket, head);
    }
})

app.use(express.static(__dirname + '/public'))

app.get('/api/info/v1/', (req, res) => {
    res.json([
        {
            Version: '2.4',
        },
    ])
})

//forward the api req to lightspeed
//if your in here then you are either a skid or just wondering how this works 
//either way get out :3
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


var sg = []
var sa = []
function getrand() {
    sg.splice(0, sg.length)
    for (var i = 0; i < 8; i++) {
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
    for (var i = 0; i < 8; i++) {
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
