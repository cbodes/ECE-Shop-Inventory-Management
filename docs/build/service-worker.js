"use strict";var precacheConfig=[["/eceshop/index.html","ef3ffd5b65841298102dc830c8f30236"],["/eceshop/static/css/main.46268907.css","82f371d99075627cde7cc2393e6066a4"],["/eceshop/static/js/main.05f7bbc9.js","930793032d37f704b2036ab8e4edb960"],["/eceshop/static/media/amplifier_icon.b1e646ab.png","b1e646abb5184c9f4cc672d4eb2ea334"],["/eceshop/static/media/bjt_icon.0e6de4e9.png","0e6de4e98c3fa0f0cd430ee15caf3949"],["/eceshop/static/media/capacitor_icon.bb8be46e.png","bb8be46ed522e89d652ee3ec0962ded4"],["/eceshop/static/media/diode_icon.5415525f.png","5415525fe494b681f76fb5a87dc6e3d1"],["/eceshop/static/media/fet_icon.f558522c.png","f558522ca5124ab8d4ac8e6ed2766ad2"],["/eceshop/static/media/ic_icon.0148d3ac.png","0148d3ac2131131d24c93280633bd38b"],["/eceshop/static/media/inductor_icon.c7026151.png","c70261516cf76f7f3e24dbf1dc9e7d15"],["/eceshop/static/media/mystyles.b1403732.scss","b140373246b2671a549997c4cd0fe4be"],["/eceshop/static/media/regulator_icon.9138fd02.png","9138fd02db29fe9a93388bf25cc669fa"],["/eceshop/static/media/resistor_icon.5bd211a0.png","5bd211a0150a4c2c92a008a7ebe3f780"],["/eceshop/static/media/switch_icon.2cac1678.png","2cac1678ca83dff037f4ef82e5d8b9ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),e=urlsToCacheKeys.has(n));var a="/eceshop/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});