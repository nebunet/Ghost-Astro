let gAPI = '/api/g/v1/'
let degAPI = '/api/deg/v1/'
addEventListener('DOMContentLoaded', async (event) => {
    const gData = await fetch(gAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    gData.forEach((game) => {
        const gameicons = document.getElementById('gcontainer')

        const games = document.createElement('div')
        games.classList.add('game-icon')
        games.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const gameimg = document.createElement('button')
        const gameimage = document.createElement('img')
        gameimage.src = game.img

        const gamename = document.createElement('p')
        gamename.innerText = game.name

        gameimg.appendChild(gameimage)
        games.appendChild(gameimg)
        games.appendChild(gamename)
        gameicons.appendChild(games)
    })
    const degData = await fetch(degAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    degData.forEach((game) => {
        const gameicons = document.getElementById('gcontainer')

        const games = document.createElement('div')
        games.classList.add('game-icon')
        games.setAttribute(
            'onclick',
            "window.location.href = '" + game.href + "'"
        )

        const gameimg = document.createElement('button')
        const gameimage = document.createElement('img')
        gameimage.src = game.img

        const gamename = document.createElement('p')
        gamename.innerText = game.name

        gameimg.appendChild(gameimage)
        games.appendChild(gameimg)
        games.appendChild(gamename)
        gameicons.appendChild(games)
    })
})
