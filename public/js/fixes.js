//This file provides fixes for sites that ultraviolet breaks
//more fixed sites will appear in /u/liftoff.js ex: youtube
//will be implemented when i feel like it

let urlButLikeDecoded = __uv$config.decodeUrl(
    document
        .querySelector('.frame_top')
        .contentWindow.location.href.replace(
            location.origin + __uv$config.prefix,
            ''
        )
)

if (urlButLikeDecoded.includes('https://play.geforcenow.com')) {
    //this only indicates if they are using ultraviolet **2** on geforce now (because uv2 loves to break sites)
    //so in this case we will swap that over to scramjet etc etc

    document.querySelector('.frame-top').src = '' //scramjet shit
}

if (urlButLikeDecoded.includes('https://open.spotify.com')) {
    //because spotify doesnt like uv 2

    document.querySelector('.frame-top').src = '' //uv3 shit
}
