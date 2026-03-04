import { findBook, getChapterFilename, getChapterNav } from '$lib/data/books.js';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const book = findBook(params.book);
	if (!book) throw error(404, 'Book not found');

	const chapter = parseInt(params.chapter);
	if (isNaN(chapter) || chapter < 1 || chapter > book.chapters) {
		throw error(404, 'Chapter not found');
	}

	const filename = getChapterFilename(book, chapter);
	const res = await fetch(`/content/books/${filename}`);

	if (!res.ok) {
		throw error(404, 'Chapter content not found');
	}

	const html = await res.text();
	const nav = getChapterNav(params.book, chapter);

	return {
		book,
		chapter,
		html,
		prev: nav.prev,
		next: nav.next
	};
}
