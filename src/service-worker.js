/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

const CACHE_NAME = `rkb-cache-${version}`;
const CONTENT_CACHE = 'rkb-content-v1';

// App shell: JS, CSS, fonts
const APP_ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys
					.filter((key) => key !== CACHE_NAME && key !== CONTENT_CACHE)
					.map((key) => caches.delete(key))
			)
		)
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);

	// Chapter content files: cache-first strategy for offline reading
	if (url.pathname.startsWith('/content/')) {
		event.respondWith(
			caches.open(CONTENT_CACHE).then(async (cache) => {
				const cached = await cache.match(event.request);
				if (cached) return cached;

				try {
					const response = await fetch(event.request);
					if (response.ok) {
						cache.put(event.request, response.clone());
					}
					return response;
				} catch {
					return new Response('Content not available offline', { status: 503 });
				}
			})
		);
		return;
	}

	// App shell: cache-first
	if (APP_ASSETS.includes(url.pathname)) {
		event.respondWith(
			caches.match(event.request).then((cached) => cached || fetch(event.request))
		);
		return;
	}

	// Navigation requests: network-first with cache fallback
	if (event.request.mode === 'navigate') {
		event.respondWith(
			fetch(event.request).catch(() =>
				caches.match(event.request).then((cached) => cached || caches.match('/'))
			)
		);
		return;
	}

	// All other requests: network with cache fallback
	event.respondWith(
		fetch(event.request).catch(() => caches.match(event.request))
	);
});
