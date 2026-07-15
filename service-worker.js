"use strict";

const APP_VERSION = "6.0.0";
const CACHE_PREFIX = "clair-courses-";
const CACHE_NAME = CACHE_PREFIX + "v" + APP_VERSION;
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-180.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      const freshRequests = APP_SHELL.map(function (path) {
        return new Request(path, { cache: "reload" });
      });
      return cache.addAll(freshRequests);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME;
            })
            .map(function (key) {
              return caches.delete(key);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .then(function (response) {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put("./index.html", copy);
            });
          }
          return response;
        })
        .catch(function () {
          return caches.match("./index.html").then(function (cached) {
            return cached || caches.match("./");
          });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cached) {
      const networkRequest = fetch(request, { cache: "no-cache" })
        .then(function (response) {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, copy);
            });
          }
          return response;
        });

      if (cached) {
        event.waitUntil(networkRequest.catch(function () {}));
        return cached;
      }

      return networkRequest.catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
