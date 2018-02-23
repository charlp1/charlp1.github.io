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

workboxSW.precache([
  {
    "url": "index.html",
    "revision": "f8c0625017b957812a87bf5d39105d4f"
  },
  {
    "url": "assets/icons/android-icon-144x144.png",
    "revision": "9cada18b879c7379102514d68e942149"
  },
  {
    "url": "assets/icons/android-icon-192x192.png",
    "revision": "5a6f74b533eeb85c255b9ca4ef383ad7"
  },
  {
    "url": "assets/icons/android-icon-36x36.png",
    "revision": "5d6aa7661dc575511b619ef10b64c5ad"
  },
  {
    "url": "assets/icons/android-icon-48x48.png",
    "revision": "684bddf1c782da7b3e590f4a48fb13a4"
  },
  {
    "url": "assets/icons/android-icon-512x512.png",
    "revision": "91cea90d311996bf54e3c3f3ac41539b"
  },
  {
    "url": "assets/icons/android-icon-72x72.png",
    "revision": "135811f101ca94579a788fbdd02111ff"
  },
  {
    "url": "assets/icons/android-icon-96x96.png",
    "revision": "77fefb5293462438fc2ef5e9ed121108"
  },
  {
    "url": "assets/icons/apple-icon-114x114.png",
    "revision": "43ea80ef742c52d03dced6b0212e9305"
  },
  {
    "url": "assets/icons/apple-icon-120x120.png",
    "revision": "3501ba0eb5572bd725acf54a62a791b1"
  },
  {
    "url": "assets/icons/apple-icon-144x144.png",
    "revision": "9cada18b879c7379102514d68e942149"
  },
  {
    "url": "assets/icons/apple-icon-152x152.png",
    "revision": "72510f0dc25bfc70f36db160df8dbb96"
  },
  {
    "url": "assets/icons/apple-icon-180x180.png",
    "revision": "0ce5dd180af3dc699c704c2549345a95"
  },
  {
    "url": "assets/icons/apple-icon-57x57.png",
    "revision": "0a5e83b0c112de257015d7ce73c61932"
  },
  {
    "url": "assets/icons/apple-icon-60x60.png",
    "revision": "a7a305165d6ab97da26ce6d04263b1e1"
  },
  {
    "url": "assets/icons/apple-icon-72x72.png",
    "revision": "135811f101ca94579a788fbdd02111ff"
  },
  {
    "url": "assets/icons/apple-icon-76x76.png",
    "revision": "536920cf16bd9772d87d904fa2471ffe"
  },
  {
    "url": "assets/icons/apple-icon-precomposed.png",
    "revision": "3ca3c780b6890cc9b1ffdc37bda313ab"
  },
  {
    "url": "assets/icons/apple-icon.png",
    "revision": "3ca3c780b6890cc9b1ffdc37bda313ab"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "0de6e3ed6bc373dfe7352d4a7c46bbc5"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "26753886d86a7c5973e1be4c767234ef"
  },
  {
    "url": "assets/icons/favicon-96x96.png",
    "revision": "77fefb5293462438fc2ef5e9ed121108"
  },
  {
    "url": "assets/icons/favicon.ico",
    "revision": "129b2655404f3776a61de255cfbb53eb"
  },
  {
    "url": "assets/icons/ms-icon-144x144.png",
    "revision": "9cada18b879c7379102514d68e942149"
  },
  {
    "url": "assets/icons/ms-icon-150x150.png",
    "revision": "c43be1420e755dbeb184641c6a6c4fbb"
  },
  {
    "url": "assets/icons/ms-icon-310x310.png",
    "revision": "8811114c85a48e1ba2eabbc2f96016da"
  },
  {
    "url": "assets/icons/ms-icon-70x70.png",
    "revision": "83269c1f0facfca20d999ebf64da68c3"
  },
  {
    "url": "assets/images/snowflake.svg",
    "revision": "6fec7c42915dd09185e7a2b3fb138ae8"
  },
  {
    "url": "dist/app.bundle.js",
    "revision": "ef4d6c7f1d14e737c5f260c270176507"
  },
  {
    "url": "dist/critical.css",
    "revision": "3f77c778c5f991f6afc3eaf1cd3d0ef8"
  },
  {
    "url": "dist/fontawesome.bundle.js",
    "revision": "44f077b456f3decb0d1b00769927c002"
  },
  {
    "url": "dist/style.css",
    "revision": "907f713016b22968dc3eabe0e520f9a2"
  },
  {
    "url": "dist/vendor.bundle.js",
    "revision": "3d36c60b8bb9caba785237cecfcdd6f9"
  },
  {
    "url": "dist/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
