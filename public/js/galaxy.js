const anticlose = localStorage.getItem('leave')
const key = localStorage.getItem('key')
const cloak = localStorage.getItem('icon')
const favicon = document.getElementById('favicon')
const clickoff1 = localStorage.getItem('clickoff')
const theme = localStorage.getItem('theme')
const leave = localStorage.getItem('leave')
const blanke = localStorage.getItem('abt')
const themeload = localStorage.getItem('themeload')
const swAllowedHostnames = ['localhost', '127.0.0.1']
const stockSW3 = '/u/sw.js'
const stockU3SW = '/violet/sww.js'
const SwRegistered = localStorage.getItem('uvregistered')
const backend = localStorage.getItem('backend')

document.addEventListener('astro:page-load', () => {
    initTheme()

    switch (cloak) {
        case 'Docs':
            favicon.href = '/assets/img/Docs.webp'
            document.title = 'Google Docs'
            break
        case 'Drive':
            favicon.href = '/assets/img/Drive.webp'
            document.title = 'Google Drive'
            break
        case 'Desmos':
            favicon.href = '/assets/img/Desmos.webp'
            document.title = 'Desmos'
            break
        case 'Canvas':
            favicon.href = '/assets/img/Canvas.webp'
            document.title = 'Canvas'
            break
        case 'Classroom':
            favicon.href = '/assets/img/Classroom.webp'
            document.title = 'Google Classroom'
            break
        case null:
            favicon.href = '/assets/img/Classroom.webp'
            document.title = 'Home'
            break
    }

    switch (blanke) {
        case 'on':
            blank()
            break
        case 'off':
            break
    }

    if (backend === null) {
        localStorage.setItem('backend', 'uv')
    }

    if (localStorage.getItem('engine') === 'https://google.com/search?q=') {
        localStorage.setItem('engine', 'https://search.brave.com/search?q=')
    }

    localStorage.setItem('currenttitle', document.title)
    localStorage.setItem('currentfavicon', favicon.href)

    switch (leave) {
        case 'on':
            window.onbeforeunload = function () {
                return true
            }
            break
        case 'off':
            break
    }

    if (SwRegistered === null) {
        unregisterSW()
        localStorage.setItem('uvregistered', 'true')
        localStorage.removeItem('ServiceWorkerRegistered')
        location.reload()
    } else {
    }

    if (clickoff1 === 'on') {
        document.addEventListener('visibilitychange', (e) => {
            if (document.visibilityState === 'visible') {
                const currenttitle = localStorage.getItem('currenttitle')
                const currentfavicon = localStorage.getItem('currentfavicon')

                document.title = currenttitle
                favicon.href = currentfavicon
            } else {
                document.title = 'Google Docs'
                favicon.href = '/assets/img/docs.webp'
            }
        })
    }

    if (anticlose === 'on') {
        window.onbeforeunload = function () {
            return true
        }
    }

    if (key === null) {
        localStorage.setItem('key', '`')
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === key) {
            top.location.replace('https://www.google.com')
        }
    })

    if (blanke === null) {
        localStorage.setItem('abt', 'off')
    }

    if (clickoff1 === null) {
        localStorage.setItem('clickoff', 'off')
    }

    if (anticlose === null) {
        localStorage.setItem('leave', 'off')
    }
})

function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.body.setAttribute('class', savedTheme)
    }
}

function blank() {
    //what were the chatgpt notes i saw here,,
    let currentUrl = top.location.href
    if (currentUrl === 'about:blank') {
    } else {
        let url = '/'
        let win = window.open()

        if (!win) {
            alert('Please allow popups and redirects in settings!')
            return
        }
        try {
            let iframe = win.document.createElement('iframe')
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
        } catch (error) {
            console.error('Failed to access win.document:', error)
        }

        top.location.replace('https://google.com')
    }
}

async function registerSW() {
    if (!navigator.serviceWorker) {
        if (
            location.protocol !== 'https:' &&
            !swAllowedHostnames.includes(location.hostname)
        )
            throw new Error(
                'Service workers cannot be registered without https.'
            )
        alert("Serviceworkers are not supported on your browser!")
        throw new Error("Your browser doesn't support service workers.")
    }
    await navigator.serviceWorker.register(stockSW3)
    await navigator.serviceWorker.register(stockU3SW)
    const connection = new BareMux.BareMuxConnection('/whatthesigma/worker.js')
    let wispUrl =
        (location.protocol === 'https:' ? 'wss' : 'ws') +
        '://' +
        location.host +
        '/wisp/'
    // TODO - Make the transport be switchable (libcurl and epoxy)
    connection.setTransport('/bussin/index.mjs', [{ wisp: wispUrl }])
}

function unregisterSW() {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
            registration.unregister()
        }
    })
}
registerSW()
