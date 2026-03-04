import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/content/copyright.html');
	if (!res.ok) throw error(404, 'Copyright page not found');
	const html = await res.text();
	return { html };
}
