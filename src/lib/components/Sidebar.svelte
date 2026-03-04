<script>
	import { page } from '$app/stores';
	import { books, articles } from '$lib/data/books.js';
	import { nameMode } from '$lib/stores/nameMode.js';

	let { open = false, onclose } = $props();

	const otBooks = books.filter(b => b.testament === 'ot' && b.id !== 'front-matter');
	const dcBooks = books.filter(b => b.testament === 'dc');
	const ntBooks = books.filter(b => b.testament === 'nt');

	function getBookName(book) {
		if ($nameMode === 'standard') return book.english;
		if ($nameMode === 'corrected') return book.transliteration;
		return book.english;
	}

	function isActive(book) {
		return $page.url.pathname.startsWith(`/${book.slug}`);
	}

	function handleClose() {
		onclose?.();
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') handleClose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<aside class="sidebar" class:open>
	<div class="sidebar-header">
		<h2>Books</h2>
		<button class="sidebar-close" aria-label="Close menu" onclick={handleClose}>&times;</button>
	</div>

	<details class="sidebar-section" open>
		<summary>Old Testament</summary>
		<ul>
			{#each otBooks as book}
				<li><a href="/{book.slug}/1" class:active={isActive(book)} onclick={handleClose}>{getBookName(book)}</a></li>
			{/each}
		</ul>
	</details>

	<details class="sidebar-section">
		<summary>Deuterocanon</summary>
		<ul>
			{#each dcBooks as book}
				<li><a href="/{book.slug}/1" class:active={isActive(book)} onclick={handleClose}>{getBookName(book)}</a></li>
			{/each}
		</ul>
	</details>

	<details class="sidebar-section">
		<summary>New Testament</summary>
		<ul>
			{#each ntBooks as book}
				<li><a href="/{book.slug}/1" class:active={isActive(book)} onclick={handleClose}>{getBookName(book)}</a></li>
			{/each}
		</ul>
	</details>

	<details class="sidebar-section">
		<summary>Articles</summary>
		<ul>
			{#each articles as article}
				<li><a href="/articles/{article.slug}" onclick={handleClose}>{article.title}</a></li>
			{/each}
		</ul>
	</details>
</aside>

{#if open}
	<div class="sidebar-overlay show" onclick={handleClose} onkeydown={handleKeydown} role="button" tabindex="-1" aria-label="Close sidebar"></div>
{/if}
