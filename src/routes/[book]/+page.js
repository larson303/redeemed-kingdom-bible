import { findBook } from '$lib/data/books.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const book = findBook(params.book);
	if (!book) throw error(404, 'Book not found');

	return { book };
}
