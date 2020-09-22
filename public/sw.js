/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-ebd7f0a67880682c5d4e.js"
  },
  {
    "url": "app-caa6167e437b7336051f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-17f925ad99559554f8e8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0173c0b37f21c3fb1418abbb4cf8c58c"
  },
  {
    "url": "styles.d4e859b6417e1b4aa103.css"
  },
  {
    "url": "google-fonts/s/cairo/v5/SLXLc1nY6HkvalqKbI6L59Y.woff2",
    "revision": "7fe2f72fd5919f1160a46a2a64a7358a"
  },
  {
    "url": "google-fonts/s/cairo/v6/SLXLc1nY6HkvalqKbI6L59Y.woff2",
    "revision": "7fe2f72fd5919f1160a46a2a64a7358a"
  },
  {
    "url": "google-fonts/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2",
    "revision": "24f7b0944e9e03a905f9d7701573b2cd"
  },
  {
    "url": "google-fonts/s/opensans/v16/memnYaGs126MiZpBA-UFUKWiUNhrIqM.woff2",
    "revision": "a49393f2171a2f4d6927ce6c14f73dbc"
  },
  {
    "url": "google-fonts/s/opensans/v16/memnYaGs126MiZpBA-UFUKWyV9hrIqM.woff2",
    "revision": "6725c3fb1f3abd7ebdcb2d244758f706"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2",
    "revision": "24f7b0944e9e03a905f9d7701573b2cd"
  },
  {
    "url": "google-fonts/s/opensans/v17/memnYaGs126MiZpBA-UFUKWiUNhrIqM.woff2",
    "revision": "a49393f2171a2f4d6927ce6c14f73dbc"
  },
  {
    "url": "google-fonts/s/opensans/v17/memnYaGs126MiZpBA-UFUKWyV9hrIqM.woff2",
    "revision": "6725c3fb1f3abd7ebdcb2d244758f706"
  },
  {
    "url": "component---src-pages-404-js-2f7271a975896cfdcfc9.js"
  },
  {
    "url": "2-e4963bb0d0a7980e882f.js"
  },
  {
    "url": "1-4a83a45917c6b68e05c4.js"
  },
  {
    "url": "styles-54533ff6c2fc9d7e2e26.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ebc0f90d7d6affcab4b687b4354c0df4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
