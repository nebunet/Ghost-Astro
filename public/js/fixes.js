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
