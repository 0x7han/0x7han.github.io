'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5779a40919d89d63d8679f84dc42bdf3",
".git/config": "430d098b9a3831d54a41ba08d26384b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f0fca109c2f5a2fd59463f01326b45b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e12d91283f4e287e96f44b2d3cd5cbf8",
".git/logs/refs/heads/main": "9b186e3be407178860718c4521c0d3c0",
".git/logs/refs/remotes/origin/main": "22d36cc171ad9fbe6214be7929603d40",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/82ab76479489f5a5eae51c320d729c2ae6909f": "75d5978c2e39d0718cda093e32ed86b0",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/7aae87637b2dbf334d33028ca4a5f0a91117bd": "ceaa8672be1745a8c37da7bc0cbaec51",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cc2d858a1bd6d3b852dc9c8cf9f2d378236e60": "9e862cf02e3c3878d93cc5bfa9a064e8",
".git/objects/22/bbdc89a77f3a60596e85b8b3bc12c16238ee35": "b64350dbb5a7ff421fef0e75dad0eee0",
".git/objects/23/2f5d39032f27f4b3fca4e18dd73fc6b1595a01": "2cda2b24de309cc4654e7ceeb5252baa",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/074a0e33d1af91b83495c71d11a9c7bb71252d": "3de9bc59895d3203b78bd3e95c27f349",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/38/0495c76d8d17bea637268de067dbd5e5f0b30a": "1654b5475c211c1f004fdeb2ad9fe900",
".git/objects/3f/8b195e7925f0ef6a55a0410b14d88a7fa37113": "145fdf806d82a5aaba0c443fa2622fa3",
".git/objects/46/f947330c91019a9606ea4d26de693148d5ee59": "56adc357810acaf6d6f66f78b9ff91f9",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/3b49a5683b9fae803eb2142a459b371aba5824": "7d69c35ce18b870a02db9e199ad0a14b",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/ffe1cc1f6519c76b716c3daaf84c68485554d6": "7e9f7612af94fec4efc8c71cbf340495",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/b46cc9aff6f707125b4e47626f0f1350696dba": "6dee714995fad7e1e5a7354124bee5c7",
".git/objects/65/c47c1c7d1f0b6ae2ffe55057a38d23052e812e": "7a304ece86816b3cd7aaf4af5ebf91a7",
".git/objects/6c/3076fe119c94b9f9a5eac0cb273cf13a9321fe": "d4926a0e46685f700647e50b189be82c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/397c292e1942991cc7569aeb941585e01d28e8": "da0e117d92e6dbff473b4029aecbb100",
".git/objects/82/7a76ef3ca12d73dabc206282b1b6cc975ea7ee": "a99225195a1531bc3dd01719cb349bf5",
".git/objects/83/a80d3543310c77f235f434bee72e47a8b1186a": "2db8967bf29e979d6e0104ea56a83628",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/43fe41a43367a7dd34bf417ba433d25366c206": "b3441d03669193df1ed2821d7bbf203c",
".git/objects/8e/25add04fc5a3a70b368b0bc282bdd68dae30e0": "aa61ad8d75993e7026e6217e8ea59937",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ab/5802615caed0a03e7c0c934fa8cebd52b3a638": "e99598145b11dd360210e57d60a07738",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/e24c53d4ec4b7d81e7b4aaa235ec367d72428d": "d58e442818318941e2c58ce2b444518f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/05cf1a43a265a76d633f0288adbf2b595733b4": "e6b3549b6f7b504ed3543c0a35991555",
".git/objects/bb/98f53195bc75b35c4b56dc2d2d4a5893ea00f3": "f69c38eb8aca40aa10626b857c185fb9",
".git/objects/c1/dd65271bc3abe6358837388e894a61d41761a9": "d131090a6034908ae68b87ae7ae6e686",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/b90951afca246a1eff3a9a402a0c24c5a15bd7": "49926f4db44689717e0d4cc440be6772",
".git/objects/ca/a64789f000fb95700672b79a9da58c932b9fa4": "708bdad7cd43d8cfe7ba1ec36959c684",
".git/objects/cf/81ffda93ca703197e7afbde352439429cdb268": "b87ba403428b5dd4a3129c30a7f11d53",
".git/objects/d0/f8f3d57bf5e32de2aeddac720aa683c6e03c23": "669774e386d84c1cdb2a53bdc67e37dd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/3314bd7bdf4dc3a05c6999206a0425f39262fb": "4343bff239cd5bb1bb3e3ee6e9f7eb0f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/66579e047597869ee0986ab2e1ec3c8a24abe6": "a8da420c60db1b23396fbd9a65762e7f",
".git/objects/dc/0d64b44bcf9fd0702854bfa948a3fde2ab8ff8": "e68ee2c18384bfa5c86293b57bf31001",
".git/objects/de/509734e4346ea45134376ab0cefe4ae4713574": "2f05e8b72c6ec67334822e50f4adf29d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e1eeed40bc2e36bdd531d068b32a8119c34210": "0cb0b09587bc90aa44d9caff546e55d1",
".git/objects/f1/30b54a6877b2a52fa044890cd0a081b4a7fd49": "89d8e26a912b4f6e18d8d8508762b205",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fc/9aa12b3fa121baedc5e68c007b04d7ef60c96d": "37bc8372c34215cff3d6e62183f7b609",
".git/refs/heads/main": "e2d281ed2b8dfbd307be18715a56adf0",
".git/refs/remotes/origin/main": "e2d281ed2b8dfbd307be18715a56adf0",
"assets/AssetManifest.bin": "16d0a069dd914deac7b3ced25b92da60",
"assets/AssetManifest.bin.json": "bd0aa7ee8dff550078af9a88ef582395",
"assets/AssetManifest.json": "803f61b74cd078f86df2c1dea72357d0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c06b5f2c4e13cb62456eabf26df03d40",
"assets/images/certificates/asli.png": "d0b40fb209cfc049487ff1e644fa4b97",
"assets/images/certificates/bdpj.png": "caf37c7d80524ca3af4f2159bd7498cd",
"assets/images/certificates/bdpw.png": "1a6a7844c69f52d823fdbdd53cc5e0e0",
"assets/images/certificates/bmafp.png": "75f3a46400f2e40be3d6559ff8f11649",
"assets/images/certificates/bmfep.png": "31f02ad180342fafc0dc91f8fb98ca7d",
"assets/images/certificates/dddt.png": "fe07f5edca6b3c6afe3d1e464990bec5",
"assets/images/certificates/fo.png": "73ed178eb2c3ca16e0070f261b3102d8",
"assets/images/certificates/its.png": "25b85aee77ad4b88dbef2f975827b020",
"assets/images/certificates/kit.png": "97a14b6ac2c67efc0e33be109fdb77a7",
"assets/images/certificates/mpdd.png": "cf58902b49b1325ae25e8bcac3f630d7",
"assets/images/certificates/mtcna.png": "b6b91691a8dc672682873eb5d0efcef4",
"assets/images/certificates/sbjk.png": "be7150ab805da2fa9643bd98e3ebcd97",
"assets/images/certificates/soa.png": "fc4e15d1e9fa176edc4c133ef1d98472",
"assets/images/profile-nobg-cropped.png": "94f9d544b4605d1d2c854a6d933d8511",
"assets/images/profile-nobg.png": "682e475c40fe12126fc10f17e5faaf01",
"assets/images/rhealth/logo.png": "8c39a586652ef3419d2bb0370f99ea27",
"assets/images/rsite/logo.png": "42ae74039dc44d6602e5d7e79cc59e75",
"assets/NOTICES": "840f846423960204cf0b23a5a7fa4b4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e403bc09ec06aec37eef2d6b4364d246",
"/": "e403bc09ec06aec37eef2d6b4364d246",
"main.dart.js": "e9fa4db315600e556a8a06dfe7916b83",
"manifest.json": "1cac813bcaabcfe13d0994f51573a04b",
"version.json": "6ec3c1f7c5a99ea66fb28f32a58484ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
