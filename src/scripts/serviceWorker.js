/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
import serviceWorkerAssets from './globals/service-worker-assets';

self.addEventListener('install', (event) => {
  console.log(global.serviceWorkerOption);
  event.waitUntil(CacheHelper.cachingAppShell([...serviceWorkerAssets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
