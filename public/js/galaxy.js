//Define it
const close = localStorage.getItem('leave')
const key = localStorage.getItem('key')
const icon = localStorage.getItem('icon')
const favicon = document.getElementById('favicon')
const clickoff1 = localStorage.getItem('clickoff')
const theme = localStorage.getItem('theme')
const leave = localStorage.getItem('leave')
const blanke = localStorage.getItem('abt')
const themeload = localStorage.getItem('themeload')
const swAllowedHostnames = ['localhost', '127.0.0.1']
const stockSW3 = '/u/sw.js'
const SwRegistered = localStorage.getItem('uvregistered')
const aalert = localStorage.getItem("alert")
//const scramSW = '/scram/sw.js'
const p = localStorage.getItem('p')

function randCloak() {
    let urls = [
        "https://www.google.com",
        "https://www.drive.google.com",
        "https://notion.com",
        "https://www.google.com/search?q=google+drive"
    ]
    top.location.replace(urls[
        Math.floor(
            Math.random() * urls.length
        )
    ])
}

addEventListener('DOMContentLoaded', async (event) => {
    initTheme()
    switch (blanke) {
        case 'on':
            blank()
            break
        case 'off':
            break
    } 

    switch(aalert) {
        case null:
        alert("join the discord for more links!!! discord.gg/clever (were like 50 away from 1000 🙏)")
        localStorage.setItem("alert", "alerted")
        break;
        case "alerted":
        break;
    }

    if (p === null) {
        localStorage.setItem('p', 'uv')
    }

    switch (icon) {
        case 'docs':
            favicon.href = '/assets/img/docs.png'
            document.title = 'Google Docs'
            break
        case 'drive':
            favicon.href = '/assets/img/drive.png'
            document.title = 'Home - Google Drive'
            break
        case 'desmos':
            favicon.href = '/assets/img/desmos.png'
            document.title = 'Desmos'
            break
        case 'canvas':
            favicon.href = '/assets/img/canvas.png'
            document.title = 'Canvas'
            break
        case 'classroom':
            favicon.href = '/assets/img/classroom.png'
            document.title = 'Home'
            break
        case null:
            favicon.href = '/assets/img/classroom.png'
            document.title = 'Home'
            break
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
                favicon.href = '/assets/img/docs.png'
            }
        })
    }

    if (close === 'on') {
        window.onbeforeunload = function () {
            return true
        }
    } else {
        console.log(`Anti Close Disabled!`)
    }
    if (key === null) {
        localStorage.setItem('key', '`')
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === key) {
            randCloak();
        }
    })

    if (blanke === null) {
        localStorage.setItem('abt', 'off')
    }

    if (clickoff1 === null) {
        localStorage.setItem('clickoff', 'off')
    }

    if (close === null) {
        localStorage.setItem('leave', 'off')
    }
})

//functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.body.setAttribute('class', savedTheme)
    }
}

function blank() {
    if (top.location.href === 'about:blank') {
        return; 
    }
    var win = window.open()
    var iframe = win.document.createElement('iframe')
    randCloak()
    iframe.style.position = 'fixed'
    iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0
    iframe.style.border = iframe.style.outline = 'none'
    iframe.style.width = iframe.style.height = '100%'
    iframe.src = "/"
    
    win.document.body.appendChild(iframe)
}

async function registerSWv2() {
    if (!navigator.serviceWorker) {
        if (
            location.protocol !== 'https:' &&
            !swAllowedHostnames.includes(location.hostname)
        )
            throw new Error(
                'Service workers cannot be registered without https.'
            )

        throw new Error("Your browser doesn't support service workers.")
    }
    await navigator.serviceWorker.register(stockSW3)
}

function unregisterSW() {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
            registration.unregister()
        }
    })
}
registerSWv2()
