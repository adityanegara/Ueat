/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
import serviceWorkerAssets from './globals/service-worker-assets';

self.addEventListener('install', (event) => {
  console.log('install serviceworker');
  console.log(serviceWorkerAssets);
  event.waitUntil(CacheHelper.cachingAppShell([...serviceWorkerAssets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('active serviceworker');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
