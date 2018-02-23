/* global importScripts WorkboxSW */

importScripts(
    './dist/workbox-sw.prod.v2.1.2.js',
);
const workboxSW = new WorkboxSW({
    skipWaiting: true,
    clientsClaim: true,
});

workboxSW.router.registerRoute(
    '/',
    workboxSW.strategies.networkFirst(),
);

workboxSW.precache([]);
