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
import 'dotenv/config'

console.log("\x1b[36m", "[DEBUG]", "\x1b[0m", "Initilizing Enviroment Varibles");

const apikey = process.env.SAIL_API_KEY;
const xaiKey = process.env.GROK_API_KEY;
const openaiKey = process.env.OPEN_AI_KEY;
const shuttleaiKey = process.env.SHUTTLE_AI_KEY;

const server = http.createServer();
const bare = createBareServer('/kitty/');
const PORT = 8080; //dont change the port i will find you
const app = express();
const __dirname = process.cwd();
const base = '/';

//https://en.wikipedia.org/wiki/Epoxy
app.use("/bussin/", express.static(epoxyPath));
app.use("/whatthesigma/", express.static(baremuxPath));
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

server.on('request', (req, res) => {
   if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res)
    } else {
        app(req, res)
    }
})

server.on('upgrade', (req, socket, head) => {
   if (bare.shouldRoute(req)) {
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
});

app.get('/gg/', (req,res) => {
    
});

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

  app.get("/api/fl/linewize/v1/", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/fl/linewize/v1/?url=${url}`)
    let d = await r.json() 
    res.json(d)
  });

  app.get("/api/fl/securly/v1/", async (req, res) => {
    const url = req.query.url;
    let r = await fetch(`https://ghostapis.useghost.pro/api/fl/securly/v1/?url=${url}&email=default`)
    let d = await r.json() 
    res.json(d)
  });


  //handle ai api routes

  if(!apikey) {
    console.log("\x1b[33m", "[WARN]", "\x1b[0m", "No sail api key detected disabling route...")
  }else {
    console.log("\x1b[36m", "[DEBUG]", "\x1b[0m", "Sail api key found!");
  }

  if(!xaiKey) {
    console.log("\x1b[33m", "[WARN]", "\x1b[0m", "No grok api key detected disabling route...")
  }else {
    console.log("\x1b[36m", "[DEBUG]", "\x1b[0m", "Grok api key found!");
  }

  if(!openaiKey) {
    console.log("\x1b[33m", "[WARN]", "\x1b[0m",  "No open api key detected disabling route...")
  }else {
    console.log("\x1b[36m", "[DEBUG]", "\x1b[0m", "Open ai key found!");
  }

  if(!shuttleaiKey) {
    console.log("\x1b[33m", "[WARN]", "\x1b[0m", "No shuttle api key detected disabling route...")
  }else {
    console.log("\x1b[36m", "[DEBUG]", "\x1b[0m", "Shuttle api key found!");
  }

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

const trending = new Map();

app.get('/trending/v1/', (req, res) => {
    //returns the top 5 trending games in the instance
    for(let [key, value] of trending) {
    
    }});

app.post('/api/hot/v1/', (req, res) => {
    //adds a game to the trending list
    //add rate limiting later please
    const game = req.query.gameid;

    if(!game) {
       return res.send(400).json(`{"detail": "Method Not Allowed"}`)
    }

    if(!trending.get(game)) {
        trending.set(game, 1)
    }else {
        trending.set(game, trending.get(game) + 1)
        res.send(200).json(`{"detail": "OK"}`)
    }
});

//the ai routes will be enabled/disabled depending on what api key is in the .env file

app.post("/api/completions/g/v1/", async (req, res) => {
    const message = req.body.message;

    if(!message) {
        res.send(400).text("No message") //still means the route is up
    }
    try {
    let grok = await fetch("https://api.x.ai/v1/chat/completions", {
        headers: {
            "Authorization": xaiKey
        },
        "method": "POST",
        "body": {
            "messages": [
              {
                "role": "system",
                "content": "You're an assistant"
              },
              {
                "role": "user",
                "content": `${message}`
              }
            ],
            "model": "grok-2-latest" //standerd
          }
    });

    const grokResponse = await grok.json();
    const choices = grokResponse?.choices[0]; //returns an array hopefully :sob:
    const response = choices?.message?.content;
    res.json({"response": `${response}`})
}catch(e) {
    res.send(500).json({"response": "failed"})
}
});

app.post("/api/completions/o/v1/", async (req, res) => {

});

app.post("/api/completions/s/v1/", async (req, res) => {
    let r = await fetch(`https://api.ozone-ai.com/v1/chat/completions`, {
        //you NEED an ozone ai key to be able to fetch from it
        headers: {
            "Authorization": apikey
        }
    })
});

app.post("/api/completions/sh/v1/", async (req, res) => {
    const message = req.body.message;

    if(!message) {
        res.send(400).text("No message") //still means the route is up
    }

    let shuttleAIreq = await fetch(`https://api.shuttleai.com/v1/chat/completions`, {
        "method": "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": shuttleaiKey
        },
        "body": {
            model: 'shuttle-3',
            messages: [{role: 'user', content: message}],
            temperature: 0.7,
            max_tokens: 5
        }
    });

    const shuttleResponse = await shuttleAIreq.json();
    const choices = shuttleResponse?.choices[0]; //returns an array hopefully :sob:
    const response = choices?.message?.content;
    res.json({"response": `${response}`})

});

server.listen(PORT)

server.on('listening', () => {

    if(!apikey && !xaiKey && !openaiKey && !shuttleaiKey) {
        console.log("\x1b[33m", "[WARN]", "\x1b[0m", "No ai api keys found! all routes will be disabled!")
    }
    console.log(
        'Thanks for using Ghost! The server is located on the link below! :3',
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
