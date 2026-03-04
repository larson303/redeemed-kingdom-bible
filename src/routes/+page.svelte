<script>
	import TopNav from '$lib/components/TopNav.svelte';
	import { books, articles } from '$lib/data/books.js';
	import { nameMode } from '$lib/stores/nameMode.js';

	const otBooks = books.filter(b => b.testament === 'ot' && b.id !== 'front-matter');
	const dcBooks = books.filter(b => b.testament === 'dc');
	const ntBooks = books.filter(b => b.testament === 'nt');
	const preface = books.find(b => b.id === 'front-matter');

	function getBookName(book) {
		if ($nameMode === 'standard') return book.english;
		if ($nameMode === 'corrected') return book.transliteration;
		return book.english;
	}

	function getBookTranslit(book) {
		if (book.english === book.transliteration) return '';
		return book.transliteration;
	}
</script>

<svelte:head>
	<title>Redeemed Kingdom Bible</title>
</svelte:head>

<TopNav />

<header>
	<h1><a href="/">Redeemed Kingdom Bible</a></h1>
</header>

<div class="bookList">
	<h3>Old Testament</h3>
	<ul class="vnav">
		{#if preface}
			<li><a href="/{preface.slug}/1">Preface</a></li>
		{/if}
		{#each otBooks as book}
			<li>
				<a href="/{book.slug}/1">
					{getBookName(book)}
					{#if $nameMode === 'both' && getBookTranslit(book)}
						<span class="book-translit">({getBookTranslit(book)})</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>

	<h3>Deuterocanon / Apocrypha</h3>
	<ul class="vnav">
		{#each dcBooks as book}
			<li>
				<a href="/{book.slug}/1">
					{getBookName(book)}
					{#if $nameMode === 'both' && getBookTranslit(book)}
						<span class="book-translit">({getBookTranslit(book)})</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>

	<h3>New Testament</h3>
	<ul class="vnav">
		{#each ntBooks as book}
			<li>
				<a href="/{book.slug}/1">
					{getBookName(book)}
					{#if $nameMode === 'both' && getBookTranslit(book)}
						<span class="book-translit">({getBookTranslit(book)})</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>

	<h3>Reference</h3>
	<ul class="vnav">
		<li><a href="/copyright">License</a></li>
	</ul>
</div>

<div class="mainindex">
	<h3>About</h3>
	<p>The Redeemed Kingdom Bible is derived from the <a href="https://worldenglish.bible/">World English Bible</a>, which is in the Public Domain. It restores Hebrew transliterations and meanings alongside the familiar English names, so readers can see what was always there.</p>

	<h3>Articles</h3>
	<ul>
		{#each articles as article}
			<li><a href="/articles/{article.slug}">{article.title}</a> &mdash; {article.description}</li>
		{/each}
	</ul>

	<p class="note">In footnotes in the New Testament, "NU" refers to Nestle/Aland UBS critical New Testament textual variants, and "TR" refers to Textus Receptus textual variants.</p>

	<footer class="fine">
		<p>Redeemed Kingdom Bible &mdash; <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> &mdash; Derived from the <a href="https://worldenglish.bible/">World English Bible</a></p>
	</footer>
</div>
