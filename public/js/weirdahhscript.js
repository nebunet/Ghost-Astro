let rgAPI = '/api/rg/v1/'
let raAPI = '/api/ra/v1/'

const container = document.getElementById('g-a_holder-1')
const appContainer = document.getElementById('g-a_holder-2')

document.addEventListener('DOMContentLoaded', async () => {
    const gData = await fetch(rgAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    gData.forEach(async (game) => {
        const i = document.getElementById('g-a_holder-1')
        const g = document.createElement('div')
        g.classList.add('g-a__card')

        const btn = document.createElement('button')
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M284-506q14-28 29-54t33-52l-56-11-84 84 78 33Zm482-275q-70 2-149.5 41T472-636q-42 42-75 90t-49 90l114 113q42-16 90-49t90-75q65-65 104-144t41-149q0-4-1.5-8t-4.5-7q-3-3-7-4.5t-8-1.5ZM546-541q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm-34 262 33 79 84-84-11-56q-26 18-52 32.5T512-279Zm351-534q8 110-36 214.5T688-399l20 99q4 20-2 39t-20 33L560-102q-15 15-36 11.5T495-114l-61-143-171-171-143-61q-20-8-24-29t11-36l126-126q14-14 33.5-20t39.5-2l99 20q95-95 199.5-139T819-857q8 1 16 4.5t14 9.5q6 6 9.5 14t4.5 16ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-48 48-113.5 57T82-76q9-66 18-131.5T157-321Zm57 56q-17 17-23.5 41T180-175q25-4 49-10t41-23q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>`
        const image = document.createElement('img')
        image.src = game.img
        image.setAttribute('class', 'g-a__img')
        image.setAttribute('alt', game.name)

        btn.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                (await encodeUrl(game.href)) +
                "'); window.location.href = '/edu/'"
        )

        btn.innerHTML = svg + game.name
        btn.setAttribute('class', 'g-a__btn')

        g.appendChild(image)
        g.appendChild(btn)
        i.appendChild(g)
    })

    const aData = await fetch(raAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    aData.forEach(async (app) => {
        const i = document.getElementById('g-a_holder-2')
        const g = document.createElement('div')

        g.classList.add('g-a__card')
        const btn = document.createElement('button')
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M284-506q14-28 29-54t33-52l-56-11-84 84 78 33Zm482-275q-70 2-149.5 41T472-636q-42 42-75 90t-49 90l114 113q42-16 90-49t90-75q65-65 104-144t41-149q0-4-1.5-8t-4.5-7q-3-3-7-4.5t-8-1.5ZM546-541q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm-34 262 33 79 84-84-11-56q-26 18-52 32.5T512-279Zm351-534q8 110-36 214.5T688-399l20 99q4 20-2 39t-20 33L560-102q-15 15-36 11.5T495-114l-61-143-171-171-143-61q-20-8-24-29t11-36l126-126q14-14 33.5-20t39.5-2l99 20q95-95 199.5-139T819-857q8 1 16 4.5t14 9.5q6 6 9.5 14t4.5 16ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-48 48-113.5 57T82-76q9-66 18-131.5T157-321Zm57 56q-17 17-23.5 41T180-175q25-4 49-10t41-23q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>`
        const image = document.createElement('img')
        image.src = app.img
        image.setAttribute('class', 'g-a__img')
        image.setAttribute('alt', app.name)

        btn.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                (await encodeUrl(app.href)) +
                "'); window.location.href = '/edu/'"
        )

        btn.innerHTML = svg + app.name
        btn.setAttribute('class', 'g-a__btn')

        g.appendChild(image)
        g.appendChild(btn)
        i.appendChild(g)
    })
})

const prs = localStorage.getItem('pr')
async function encodeUrl(url) {
    switch (prs) {
        case 'uv':
            return __uv$config.prefix + __uv$config.encodeUrl(url)
        case 'rh':
            return '/' + (await RammerheadEncode(url))
        case 'uv3':
            return __edu$conf.prefix + __edu$conf.encodeUrl(url)
        case null:
            return __uv$config.prefix + __uv$config.encodeUrl(url)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomLink() {
    let csites = [
        'https://google.com',
        'https://classroom.google.com',
        'https://docs.google.com',
        'https://nasa.gov',
        'https://desmos.com',
        'https://clever.com',
        'https://ixl.com',
    ]
    return csites[getRandomInt(0, csites.length - 1)]
}
function blank() {
    var currentUrl = top.location.href
    if (currentUrl === 'about:blank') {
    } else {
        var win = window.open()
        var url = '/'
        var iframe = win.document.createElement('iframe')
        top.location.replace(getRandomLink())
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
    }
}
