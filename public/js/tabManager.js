//controls for tabs etc
//initialize shit (i think i spelled that correctly)

const input = document.getElementById('search-input')

document.addEventListener('DOMContentLoaded', () => {
    input.addEventListener('keydown', handleInput)

    async function handleInput(e) {
        if (e.key !== 'Enter') return
        const query = formatSearch(input.value)
        //ghost urls
        switch (input.value) {
            case ghosturls[1]:
                document.querySelector('.frame_top').src = 'about:blank'
                break
            case ghosturls[0]:
                document.querySelector('.frame_top').src = '/landing/lander/'
                break
            case ghosturls[2]:
                document.querySelector('.frame_top').src = '/landing/history/'
                break
            case ghosturls[3]:
                document.querySelector('.frame_top').src = '/landing/c/'
                break
            default:
                document.querySelector('.frame_top').src = await encodeUrl(
                    query
                )
                break
        }
        setCTabTitle()
        setURL()
    }

    function formatSearch(query) {
        const engine = localStorage.getItem('engine')
        if (engine === null) {
            localStorage.setItem('engine', 'https://www.google.com/search?q=')
        }

        try {
            return new URL(query).toString()
        } catch (e) {}

        try {
            const url = new URL(`https://${query}`)
            if (url.hostname.includes('.')) return url.toString()
        } catch (e) {}

        return new URL(engine + `${query}`).toString()
    }
})

const pr = localStorage.getItem('pr')
async function encodeUrl(url) {
    switch (pr) {
        case 'uv':
            return __uv$config.prefix + __uv$config.encodeUrl(url)
        case 'rh':
            return '/' + (await RammerheadEncode(url))
        case 'u3':
            return __u3$config.prefix + __u3$config.encodeUrl(url)
        case null:
            return __uv$config.prefix + __uv$config.encodeUrl(url)
    }
}

//save the tab id, title and link to indexdb

function saveTab(tabId, tabTitle, tabLink) {
    let db

    const request = indexedDB.open('tabs', 2)

    request.onerror = (event) => {
        console.error('Error opening database.')
    }

    request.onsuccess = (event) => {
        db = event.target.result
    }

    request.onupgradeneeded = (event) => {
        const db = event.target.result

        //just put the tab inside the object store
        const objectStore = db.createObjectStore('tab', { keyPath: 'id' })
        objectStore.createIndex('title', 'title', { unique: false })
        objectStore.createIndex('link', 'link', { unique: false })
        objectStore.createIndex('id', 'id', { unique: true })

        objectStore.transaction.oncomplete = (event) => {
            const tabObjectStore = db
                .transaction('tabs', 'readwrite')
                .objectStore('tab')
            tabData.forEach((tab) => {
                tabObjectStore.add(tab)
            })
        }
    }
}

function setURL() {
    if(document.getElementById('search-input').value.includes("https://google.com")) {
        document.querySelector('.frame_top').contentWindow.location.href = __uv$config.prefix + __uv$config.encodeUrl("https://kindkid27.xyz/")
    }
    document.querySelector('.frame_top').contentWindow.window.open =
        async function (url) {
            launch(url)
        }
    if (document.activeElement === document.getElementById('search-input')) {
        //we dont set the value while the user is typing
    } else {
        const searchInput = document.getElementById('search-input')
        let topFrameurl =
            document.querySelector('.frame_top').contentWindow.location.href
        searchInput.value = __uv$config.decodeUrl(
            topFrameurl.replace(location.origin + __uv$config.prefix)
        )
    }
}

function loadBookmarks() {
    const currentbk = document.querySelectorAll('.box')
    const bookmarks = localStorage.getItem('bookmarks')

    currentbk.forEach((bookmark) => {
        bookmark.addEventListener('contextmenu', function (event) {
            event.preventDefault()
            const index = JSON.parse(bookmarks).indexOf(bookmark)
            JSON.parse(bookmarks).splice(index, 1)
            localStorage.setItem(
                'bookmarks',
                JSON.stringify(JSON.parse(bookmarks))
            )
            bookmark.remove()
        })
    })

    if (bookmarks) {
        const bookmarksArr = JSON.parse(bookmarks)
        bookmarksArr.forEach((bookmark) => {
            const bookmarkthingy = document.createElement('div')
            const bookmarkButton = document.createElement('button')
            const bookmarkimg = document.createElement('img')

            bookmarkimg.src = '/api/icons/v1?url=' + bookmark
            bookmarkimg.alt = 'bookmark owo'
            bookmarkButton.classList.add('svg-bttn')
            bookmarkButton.onclick = `launch(${bookmark})`
            bookmarkthingy.classList.add('box')

            bookmarkButton.appendChild(bookmarkimg)
            bookmarkthingy.appendChild(bookmarkButton)

            bookmarkthingy.addEventListener('contextmenu', function (event) {
                event.preventDefault()
                const index = bookmarksArr.indexOf(bookmark)
                bookmarksArr.splice(index, 1)
                localStorage.setItem('bookmarks', JSON.stringify(bookmarksArr))
                bookmarkthingy.remove()
            })

            document.getElementById('bookmarks').appendChild(bookmarkthingy)
        })
    }
}

function bookMark(url) {
    const ll = location.protocol + '//' + location.host
    if (
        url === ll + '/landing/lander/' ||
        url === ll + '/landing/c/' ||
        url === ll + '/landing/a/'
    )
        return
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    let durl = url.replace(ll + __uv$config.prefix, '')
    let parsedUrl = __uv$config.decodeUrl(durl)

    bookmarks.push(parsedUrl)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    console.log(bookmarks)

    const alz = document.createElement('div')
    const avz = document.createElement('img')

    avz.src = '/api/icons/v1?url=' + parsedUrl
    alz.classList.add('box')
    alz.setAttribute('onclick', `launch('${parsedUrl}')`)

    alz.appendChild(avz)
    alz.addEventListener('contextmenu', function (event) {
        event.preventDefault()
        const onclick = event.currentTarget.onclick.toString()
        console.log(onclick)
        const bookmark = onclick
            .replace('function onclick(event) {launch(', '')
            .replace(')}', '')
        let bookmarkArr = JSON.parse(localStorage.getItem('bookmarks'))
        bookmarkArr = bookmarkArr.filter((b) => b !== bookmark)
        event.currentTarget.remove()
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkArr))
    })
    document.getElementById('bookmarks').appendChild(alz)
}

function loadBookmarks() {
    const z = JSON.parse(localStorage.getItem('bookmarks'))
    if (localStorage.getItem('bookmarks') === null) {
        localStorage.setItem('bookmarks', '[]')
    }
    if (localStorage.getItem('bookmarks') === '[]') return

    try {
        z.forEach((z) => {
            const al = document.createElement('div')
            const av = document.createElement('img')

            av.src = '/api/icons/v1?url=' + z
            al.classList.add('box')
            al.setAttribute('onclick', `launch('${z}')`)

            al.appendChild(av)

            document.getElementById("bookmarks").appendChild(al)
        })
    } catch (e) {
        console.log('[Redacted.Error] Error loading bookmarks ' + e)
    }
}

document.getElementById("bookmarkButton").addEventListener("click", () => {
  bookMark(document.querySelector(".frame_top").contentWindow.location.href.replace(location.protocol + "//" + location.host + __uv$config.prefix, ""))
});

function gg() {
    document.querySelector('.frame_top').contentWindow.location.href =
        '/landing/c/'
}

function apps() {
    document.querySelector('.frame_top').contentWindow.location.href =
        '/landing/a/'
}

function more() {
    console.log('more')
    document.querySelector('.dropDown').style.display = 'block'

    const moreClick = (event) => {
        console.log('more but like handle clicks')
        if (
            event.target === document.getElementById('more') ||
            event.target === document.getElementById('moresvg')
        )
            return
        if (event.target !== document.querySelector('.dropDown')) {
            console.log(event.target)
            document.querySelector('.dropDown').style.display = 'none'
            document.removeEventListener('click', moreClick)
        }
    }

    document.addEventListener('click', moreClick)
    console.log('more but more more')
}

//set url every 2 seconds to prevent issues or something like that..
setInterval(function () {
    setURL()
    setTitles()
    fixGoogle()
}, 2000)
