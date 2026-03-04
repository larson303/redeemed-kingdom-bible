import { articles } from '$lib/data/books.js';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const article = articles.find(a => a.slug === params.slug);
	if (!article) throw error(404, 'Article not found');

	const res = await fetch(`/content/articles/${params.slug}.html`);
	if (!res.ok) throw error(404, 'Article content not found');

	const html = await res.text();

	return { article, html };
}
