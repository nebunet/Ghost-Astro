addEventListener('DOMContentLoaded', async (event) => {
    let aAPI = '/api/a/v1/'
    const gData = await fetch(aAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    gData.forEach((game) => {
        const gameicons = document.getElementById('acontainer')

        const games = document.createElement('div')
        games.classList.add('ga-icon')
        games.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const gameimg = document.createElement('button')
        games.setAttribute("style", `background-image: url("${game.img}");`)

        const gamename = document.createElement('p')
        gamename.innerText = game.name

        games.appendChild(gameimg)
        games.appendChild(gamename)
        gameicons.appendChild(games)
    })
})
