/*global Ultravioletfsfdsfds*/
// stop stealing my bare, skids.
self.__uv$config = {
    prefix: '/u/liftoff/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/u/handoff.js',
    client: '/u/astro.js',
    bundle: '/u/space.js',
    config: '/u/liftoff.js',
    sw: '/u/constallations.js',

    /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */
    inject: async (url) => {
        if (url.host === '') {
            return `
                  `
        }

        return `
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        `
    },
}
