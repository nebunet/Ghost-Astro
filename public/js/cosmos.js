function clickoff() {
    const local = localStorage.getItem('clickoff')
    switch (local) {
        case 'off':
            localStorage.setItem('clickoff', 'on')
            break
        case 'on':
            localStorage.setItem('clickoff', 'off')
            break
        case null:
            localStorage.setItem('clickoff', 'on')
            break
    }
    location.href = '/s/'
}

function unregisterSW() {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
            registration.unregister()
        }
    })
}

function uv() {
    localStorage.setItem('pr', 'uv')
}
function u3() {
    localStorage.setItem('pr', 'u3')
}
function rh() {
    localStorage.setItem('pr', 'rh')
}

function SCRAM() {
    localStorage.setItem('pr', 'scram!!!')
}

function tabs() {
    const tabslocal = localStorage.getItem('tabs')
    switch (tabslocal) {
        case 'off':
            localStorage.setItem('tabs', 'on')
            break
        case 'on':
            localStorage.setItem('tabs', 'off')
            break
    }
    location.href = '/s/'
}

function clickoff() {
    const clickofff = localStorage.getItem('clickoff')

    switch (clickofff) {
        case 'off':
            localStorage.setItem('clickoff', 'on')
            location.href = '/'
            break
        case 'on':
            localStorage.setItem('clickoff', 'off')
            location.href = '/'
            break
    }
}

function noleave() {
    const leave = localStorage.getItem('leave')

    switch (leave) {
        case 'off':
            localStorage.setItem('leave', 'on')
            break
        case 'on':
            localStorage.setItem('leave', 'off')
            break
        case null:
            localStorage.setItem('leave', 'on')
            break
    }
    location.href = '/s/'
}

function icon(favicon) {
    document.getElementById('favicon').href = `/assets/img/${favicon}.webp`
    localStorage.setItem('icon', favicon)

    switch (favicon) {
        case 'Docs':
            document.title = 'Google Docs'
            break
        case 'Drive':
            document.title = 'Home - Google Drive'
            break
        case 'Desmos':
            document.title = 'Desmos | Beautiful free math.'
            break
        case 'Canvas':
            document.title = 'Canvas'
            break
        case 'Classroom':
            document.title = 'Home'
            break
    }
}

function recordkey() {
    function handleKeyDown(event) {
        localStorage.setItem('key', event.key)
        document.removeEventListener('keydown', handleKeyDown)
    }
    document.addEventListener('keydown', handleKeyDown)
}

document.addEventListener('DOMContentLoaded', async () => {
    const engine = document.getElementById('engineSWITCHER')
    const currentengine = localStorage.getItem('engine')
    engine.value = currentengine

    engine.addEventListener('change', (event) => {
        const selectedValue = event.target.value
        localStorage.setItem('engine', selectedValue)
    })
})

function theme(theme) {
    localStorage.setItem('theme', theme)
    document.body.setAttribute('class', theme)
}

function abt() {
    const abtt = localStorage.getItem('abt')
    if (abtt === 'off') {
        localStorage.setItem('abt', 'on')
        alert('Please Allow Popups And Redirects When the Page Loads :D')
        location.href = '/'
    } else {
        localStorage.setItem('abt', 'off')
        location.href = '/'
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const clickSwitch = document.getElementById('clickoff')
    const aboutblankSwitch = document.getElementById('abt')
    const closeSwitch = document.getElementById('close')

    const clickOff = localStorage.getItem('clickoff')
    const close = localStorage.getItem('leave')
    const aboutBlank = localStorage.getItem('blanker')

    if (clickOff === 'true') clickSwitch.checked = 'true'
    if (close === 'true') closeSwitch.checked = 'true'
    if (aboutBlank === 'true') aboutblankSwitch.checked = 'true'
})

//mewo :3
