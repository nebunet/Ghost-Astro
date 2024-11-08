/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/u/query/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/u/h.js',
    client: '/u/cl.js',
    bundle: '/u/b.js',
    config: '/u/c.js',
    sw: '/u/usw.js',
};