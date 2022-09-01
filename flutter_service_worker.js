'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "80b1ce0b7427d287509a572eda37b157",
"assets/FontManifest.json": "f5d8d13383ca620d891963f3266f302c",
"assets/fonts/fa-brands-400.ttf": "9d2bbde416583cfa5cb30c995b41f732",
"assets/fonts/fa-regular-400.ttf": "f417567703b4fcfbf750952bd2db8a44",
"assets/fonts/fa-solid-900.ttf": "dd5e5b90ca8ee986b13b04310f9aef9d",
"assets/fonts/fa-v4compatibility.ttf": "d4a14b7a210bc8b5c2fe661a18e7e8db",
"assets/fonts/LATO-REGULAR.TTF": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/images/add.png": "3de4706f7a60457a7c326dfc58b15135",
"assets/images/admin.png": "968025e5431f76c9367c069f58ca3580",
"assets/images/budget.png": "5119c41ddb746b0d6ffcdbe08c897c32",
"assets/images/coin.png": "dd74d00b7c134d446145f187f833c636",
"assets/images/coupon%2520(1).png": "36ac265fff5e27511108ab8c6cc0a9d2",
"assets/images/coupon.png": "efad72852c82b9bf0755c380b1ac6144",
"assets/images/dashboard.png": "625457fddfd5a9243a36dfe32a14cf31",
"assets/images/dollar%2520(1).png": "b7e9774c075eb0a78da10c0220bc7e5d",
"assets/images/expense.png": "62868c7cdc8e5e85677704311edb37bf",
"assets/images/expenses.png": "11f79315d7440078090596542174c0de",
"assets/images/fee.png": "0031880174a8a3b901f3265b45da0f8c",
"assets/images/hand.png": "248e0d7cca1d2bff9bbe85e17298ea3d",
"assets/images/home32.png": "c832ba6b9e7e6013dfd4f337f904d427",
"assets/images/logout.png": "c5c9f2ac87df7e68e75e1b1b32ef6e5e",
"assets/images/man%2520(1).png": "dc5161dd5e36744d184e0b98e97d31ba",
"assets/images/membership.png": "3cd6b9f889ce10d7f665a39ef70fb90f",
"assets/images/notification.png": "efd639bf053b5189d2c0b453f3113134",
"assets/images/promo-code.png": "d19d9bfe89fa5eaa974c53c77f9b5dba",
"assets/images/reset.png": "92a6445c32e7badb33ce385d54f84edb",
"assets/images/result.png": "96d832843d7270c27f560cf408c7c926",
"assets/images/ring-bell.png": "81b5d3ec9d72890ee5100ebe49bec81b",
"assets/images/star.png": "e0284aa046e01ff88483d17f76d63580",
"assets/images/success.png": "61b9452727c08ea0042f0f148bebcab0",
"assets/images/teamwork%2520(1).png": "962bacd0429c0e3335e887419df3372f",
"assets/images/teamwork.png": "d26fe37d9cf230202a61b1bf45fdd697",
"assets/images/tennis%2520(1).png": "44409def97fa57ebbe5c07a9e374c798",
"assets/images/tennis%2520Court.jpg": "222c6b8efecef5bb6390341e5d36503f",
"assets/images/tennis-ball%2520(1).png": "10c4e7505419d81f5495a5f8005dd982",
"assets/images/tennis-player.png": "65e22c1d522b3b3ab7da9f4349d553ef",
"assets/images/tennis32.png": "dda8d293e179851a8d1724ed7e774dea",
"assets/images/tennisball.png": "8111d04fac4dd48112951a64f61d258a",
"assets/images/tennismatch.png": "7ad8ac9f5a6a27904587a5c008b9cdf4",
"assets/images/Tennisphoto.png": "9c75f63165d36d08e842dab5705a230f",
"assets/images/tournament.png": "5be795dc76878e5fb511eade0c800fac",
"assets/images/trophy32.png": "974aecbc8d81a24eea9a544d97999f49",
"assets/images/user32.png": "bc2475c83795792d24708bd12bd2dcc8",
"assets/NOTICES": "0b8505272c7400c6521494577a468516",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "3df05b065b39f0b3763cadc0532d59a4",
"icons/Icon-512.png": "88036a5fda874bbf400b48801669af37",
"icons/Icon-maskable-192.png": "b80873e59e28660b0f700440d2566cd1",
"icons/Icon-maskable-512.png": "68e2611dd7c8254eaae61132171cfb7e",
"index.html": "f4a1f9b20d766c7276624bb837e7aa20",
"/": "f4a1f9b20d766c7276624bb837e7aa20",
"main.dart.js": "27b1918ffc26f7cb8d3d05eacdc4866c",
"manifest.json": "1a1ee60a108c31e9b28ab80c3470b767",
"tennis.png": "cb60ecd7a9c3a5b3a20ce3e1486a9bd8",
"version.json": "8ab0813ed2ce81dc56c05454f12ea3b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
