import { createBareServer } from '@tomphttp/bare-server-node'
import http from 'node:http'
import express from 'express'
import g from './serverlib/games.mjs'
import deg from './serverlib/deg.mjs'
import a from './serverlib/apps.mjs'
import { handler as ssrHandler } from './dist/server/entry.mjs'

const server = http.createServer()
const bare = createBareServer('/bare/')
const PORT = 8080
const app = express()
const __dirname = process.cwd()
const base = '/'
app.use(base, express.static('dist/client/'))
app.use(ssrHandler)

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
        socket.end()
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

app.get('/api/deg/v1/', (req, res) => {
    res.json(deg)
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
