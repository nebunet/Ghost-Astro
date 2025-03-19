let ghosturls = [
    'ghost://newtab',
    'ghost://blank',
    'ghost://games',
    'ghost://apps',
]
let tabs = []
let tabID = [0]
let tabContainer
let frameContainer
let currentFrame = document.querySelector('.frame_top')
let activeTab = document.querySelector('.tab.actv')

function newTab() {
    try {
        let theCurrentUrl = __uv$config.decodeUrl(
            document
                .querySelector('.frame_top')
                .contentWindow.location.href.replace(
                    location.protocol +
                        '//' +
                        location.host +
                        __uv$config.prefix,
                    ''
                )
        )

        //request picture in picture on that shit
        if (theCurrentUrl.includes('https://www.youtube.com/watch')) {
            console.log(
                '[Ghost.service] Requesting Picture in Picture for youtube player!'
            )
            document
                .querySelector('.frame_top')
                .contentWindow.document.getElementById('ghost_player')
                .requestPictureInPicture()
        }
    } catch (e) {
        console.warn('[Ghost.warn] There is no current content window!')
    }
    tabContainer = document.getElementById('tab-section')
    frameContainer = document.getElementById('iframeWrapper')
    try {
        let currentTab = document.querySelector('.tab.actv')
        let currentFrame = document.querySelector('.frame_top')

        currentTab.classList.remove('actv')
        currentFrame.setAttribute('class', 'frame_bt')
    } catch (e) {
        console.error('[Ghost.error] ' + e)
    }

    const newTab = {
        i: tabID[tabID.length - 1] + 1,
        ti: 'Ghost || Home',
        s: '/landing/lander',
        x: '/assets/img/ghost.webp',
        b: document.createElement('div'),
        m: document.createElement('iframe'),
    }
    let tt = newTab.b
    const sv = `<div class="tab-x" onclick="rmTab(${newTab.i})"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>`

    //tab type shit
    tt.classList.add('tab', 'actv')
    tt.id = newTab.i
    tt.innerHTML = `<button class="tabbtn" onclick="switchTab(${newTab.i})"><div class="tab-icon"><img src="${newTab.x}" id="tab-icon" alt="t_icon" /></div><p class="tab-title" id="tab-title">${newTab.ti}</p></button>${sv}`

    newTab.m.src = newTab.s
    newTab.m.id = newTab.i
    newTab.m.classList.add('frame_top')

    frameContainer.appendChild(newTab.m)
    tabContainer.appendChild(tt)

    tabID.push(newTab.i)
    tabs.push(newTab)
    setTitles()
    console.log('[Ghost.complete] Tab Created!')
}

function rmTab(tabId) {
    const ff = document.querySelector(`iframe[id='${tabId}']`)
    const gg = document.querySelector(`div[id='${tabId}']`)
    console.log(gg + ff)
    if (!ff || !gg) return 'gg and ff not found'
    if (gg.classList.contains('actv')) {
        tabs = tabs.filter((t) => t.i !== tabId)
        tabID = tabID.filter((t) => t !== tabId)
        if (tabs.length > 0) {
            switchTab(tabs[0].i)
        }
    }

    ff.remove()
    gg.remove()

    tabs = tabs.filter((e) => e.tabID !== tabId)
    tabID = tabID.filter((e) => e !== tabId)
    console.log('[Ghost.complete] Tab Deleted!')
}

function switchTab(tabId) {
    const d = document.querySelector('.frame_top')
    const e = document.querySelector('.tab.actv')
    let currentDecodedUrl = __uv$config.decodeUrl(
        document
            .querySelector('.frame_top')
            .contentWindow.location.href.replace(
                location.origin + __uv$config.prefix,
                ''
            )
    )

    console.log('[Ghost.service] ' + currentDecodedUrl)
    //request picture in picture on that shit
    if (currentDecodedUrl.includes('https://www.youtube.com/watch')) {
        console.log(
            '[Ghost.service] Requesting Picture in Picture for youtube player!'
        )
        document
            .querySelector('.frame_top')
            .contentWindow.document.getElementById('ghost_player')
            .requestPictureInPicture()
    } else {
    }

    if (d) {
        d.classList.remove('frame_top')
        d.classList.add('frame_bt')
    }
    if (e) e.classList.remove('.actv')

    const a = document.querySelector(`iframe[id='${tabId}']`)
    const b = document.querySelector(`div[id='${tabId}']`)

    if (a) {
        a.classList.add('.frame_top')
        a.classList.remove('frame_bt')
    }
    if (b) b.classList.add('actv')
}

function setTitles() {
    currentFrame = document.querySelector('.frame_top')
    activeTab = document.querySelector('.tab.actv')
    let frameTitle = currentFrame.contentWindow.document.title
    let tabName = activeTab.querySelector('.tab-title')
    let tIcon = activeTab.querySelector('.tab-icon')
    const spliturl = __uv$config.decodeUrl(
        currentFrame.contentWindow.location.href.replace(
            location.origin + __uv$config.prefix,
            ''
        )
    )

    let id = currentFrame.id - 1
    tabName.innerText = frameTitle
    tabs[id].title = frameTitle
    if (
        spliturl === 'hvtr:-/noaanhmsv::0:0-lcnfilg-lcnfep' ||
        spliturl === 'a`owt8bnalk' ||
        spliturl === 'hvtr:-/noaanhmsv::0:0-lcnfilg-c-'
    ) {
        tIcon.querySelector('img').src = '/assets/img/ghost.webp'
        tabs[id].icon = '/assets/img/ghost.webp'
    } else {
        tIcon.querySelector('img').src = '/api/icons/v1?url=' + spliturl
        tabs[id].icon = '/api/icons/v1?url=' + spliturl
    }
    try {
        if (
            document.activeElement === document.querySelector('.search-input')
        ) {
        } else {
            //check for ghost:// links
            switch (
                currentFrame.contentWindow.location.href.replace(
                    location.origin,
                    ''
                )
            ) {
                case '/landing/lander':
                    document.querySelector('.search-input').value = ghosturls[0]
                    break
                case '/landing/c/':
                    document.querySelector('.search-input').value = ghosturls[2]
                    break
                case '/landing/a/':
                    document.querySelector('.search-input').value = ghosturls[3]
                    break
                case 'about:blank':
                    document.querySelector('.search-input').value = ghosturls[1]
                    break
                default:
                    document.querySelector('.search-input').value = spliturl
                    break
            }
        }
    } catch (e) {
        console.error('[Ghost.error] Failed setting URL! ' + e)
    }
}

async function launch(url) {
    await newTab()
    document.querySelector('.frame_top').contentWindow.location.href =
        __uv$config.prefix + __uv$config.encodeUrl(url)
}

/* function launch(url) {
    if (prx = "rh") {
      // TODO : Rammerhead 
      return;
    } 
    if (prx = "u2") {
      currentFrame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
      return
    }
    if (prx = "u3") {
      // TODO : Uv3
      return
    }
    // uv 2 by default
    currentFrame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  }*/

function music() {
    let music = window.prompt('enter a music url here')
    if (music.includes('https://')) {
        musicPlayer(music)
    } else {
        alert('not a valid music url!')
    }
}

function switchTab(tabId) {
    let ccurrentDecodedUrl = __uv$config.decodeUrl(
        document
            .querySelector('.frame_top')
            .contentWindow.location.href.replace(
                location.origin + __uv$config.prefix,
                ''
            )
    )

    //request picture in picture on that shit
    if (ccurrentDecodedUrl.includes('https://www.youtube.com/watch')) {
        console.log(
            '[Ghost.service] Requesting Picture in Picture for youtube player!'
        )
        document
            .querySelector('.frame_top')
            .contentWindow.document.getElementById('ghost_player')
            .requestPictureInPicture()
    }
    activeTab.classList.toggle('actv')
    currentFrame.setAttribute('class', 'frame_bt')
    document
        .querySelector(`iframe[id='${tabId}']`)
        .setAttribute('class', 'frame_top')
    document
        .querySelector(`div[id='${tabId}']`)
        .setAttribute('class', 'tab actv')
    setTitles()
}

function redir() {
    var win = window.open()
    var url = '/edu/'
    var iframe = win.document.createElement('iframe')
    iframe.style.position = 'fixed'
    iframe.style.top =
        iframe.style.bottom =
        iframe.style.left =
        iframe.style.right =
            0
    iframe.style.border = iframe.style.outline = 'none'
    iframe.style.width = iframe.style.height = '100%'
    iframe.src = url

    win.document.body.appendChild(iframe)
}

function fixGoogle() {
    if (input.value.includes('https://www.google.com/search=q?')) {
        let substr = input.value.split('?')
        let decoded = __uv$config.decodeUrl(substr[1])
        currentFrame.src =
            __uv$config.prefix +
            __uv$config.encodeUrl('https://www.google.com/search?q=' + decoded)
        console.log('[CALLBACK] Fixed Google!')
    }
}

//controls

function inspect() {
    currentFrame.contentWindow.eruda.init()
}

function copy() {
    let copybtn = document.getElementById('copybtn')
    navigator.clipboard.writeText(currentFrame.contentWindow.location.href)
    copybtn.inewTaberHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> `
    setTimeout(
        `copybtn.inewTaberHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" ><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'`,
        3000
    )
}

function back() {
    currentFrame.contentWindow.history.back()
}

function refresh() {
    currentFrame.src = currentFrame.contentWindow.location.href
}

function home() {
    window.location.href = '/'
}

switch (localStorage.getItem('engine')) {
    case 'https://www.google.com/search?q=':
        document.getElementById('searchIcon').data = '/assets/google.svg'
        break
    case 'https://www.bing.com/search?q=':
        document.getElementById('searchIcon').data = '/assets/bing.svg'
        break
    case 'https://search.brave.com/search?q=':
        document.getElementById('searchIcon').data = '/assets/brave.svg'
        break
    case 'https://duckduckgo.com/?q=':
        document.getElementById('searchIcon').data = '/assets/ddg.svg'
        break
}

document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('url')) {
        newTab()
        currentFrame.src = localStorage.getItem('url')
        localStorage.removeItem('url')
    } else {
        newTab()
    }
    loadBookmarks()
    //setup connection to baremux and epoxy
    try {
        const connection = new BareMux.BareMuxConnection(
            '/whatthesigma/worker.js'
        )
        let wispUrl =
            (location.protocol === 'https:' ? 'wss' : 'ws') +
            '://' +
            location.host +
            '/wisp/'
        connection.setTransport('/bussin/index.mjs', [{ wisp: wispUrl }])
    } catch (e) {
        console.error('[Ghost.Error] Failed to setup baremux! ', e)
    }
    console.log('[Ghost.Service] Loaded!')
})
