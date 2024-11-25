import { createBareServer } from '@tomphttp/bare-server-node'
import http from 'node:http'
import express from 'express'
import g from './serverlib/games.mjs'
import a from './serverlib/apps.mjs'
import { handler as ssrHandler } from './dist/server/entry.mjs'
//import createRammerhead from 'rammerhead/src/server/index.js'
//import { expand } from 'dotenv-expand'
//import { config } from 'dotenv-flow'

//expand(config())

const bare = createBareServer('/bare/')
const server = http.createServer()
const PORT = 8080
const app = express()
const __dirname = process.cwd()
const base = '/'
app.use(base, express.static('dist/client/'))
app.use(ssrHandler)

//dont know if this will work lmao
server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res)
    } //else if (shouldRouteRh(req)) {
    ///routeRhRequest(req, res)
    //}
    else {
        app(req, res)
    }
})

server.on('upgrade', (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head)
    } // else if (shouldRouteRh(req)) {
    //routeRhUpgrade(req, socket, head)
    //}
    else {
        socket.end()
    }
})

// [SETTING UP RAMMERHEAD FOR LATER!!!!]

//not skidded from divide (e9x)

/* const rh = createRammerhead()

// used when forwarding the script
const rammerheadScopes = [
    '/rammerhead.js',
    '/hammerhead.js',
    '/transport-worker.js',
    '/task.js',
    '/iframe-task.js',
    '/worker-hammerhead.js',
    '/messaging',
    '/sessionexists',
    '/deletesession',
    '/newsession',
    '/editsession',
    '/needpassword',
    '/syncLocalStorage',
    '/api/shuffleDict',
]

const rammerheadSession = /^\/[a-z0-9]{32}/

function shouldRouteRh(req) {
    const url = new URL(req.url, 'http://0.0.0.0')
    return (
        rammerheadScopes.includes(url.pathname) ||
        rammerheadSession.test(url.pathname)
    )
}

/**
 *
 * @param {import('node:http').IncomingRequest} req
 * @param {import('node:http').ServerResponse} res

function routeRhRequest(req, res) {
    rh.emit('request', req, res)
}

/**
 *
 * @param {import('node:http').IncomingRequest} req
 * @param {import('node:stream').Duplex} socket
 * @param {Buffer} head

function routeRhUpgrade(req, socket, head) {
    rh.emit('upgrade', req, socket, head)
}

*/

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname })
})

app.get('/api/info/v1/', (req, res) => {
    res.json([
        {
            Version: '2.4',
        },
    ])
})

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

app.get('/api/g/v1/', (req, res) => {
    res.json(g)
})

app.get('/api/rg/v1/', (req, res) => {
    res.json(sg)
})

app.get('/api/a/v1/', (req, res) => {
    res.json(a)
})

app.get('/api/ra/v1/', (req, res) => {
    res.json(sa)
})

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
