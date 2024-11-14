/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/u/query/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/u/handoff.js',
    client: '/u/astro.js',
    bundle: '/u/space.js',
    config: '/u/liftoff.js',
    sw: '/u/constallations.js',
};