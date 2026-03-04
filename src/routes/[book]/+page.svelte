<script>
	import TopNav from '$lib/components/TopNav.svelte';
	import { nameMode } from '$lib/stores/nameMode.js';

	let { data } = $props();

	function getBookName(book) {
		if ($nameMode === 'standard') return book.english;
		if ($nameMode === 'corrected') return book.transliteration;
		return `${book.english} (${book.transliteration})`;
	}
</script>

<svelte:head>
	<title>{data.book.english} - Redeemed Kingdom Bible</title>
</svelte:head>

<div class="chlist">
	<TopNav>
		<nav class="breadcrumb">
			<a href="/">Home</a>
			<span class="separator">&rsaquo;</span>
			<span class="current">{getBookName(data.book)}</span>
		</nav>
	</TopNav>

	<main class="main">
		<h1>{getBookName(data.book)}</h1>
		{#if data.book.meaning}
			<h2>'{data.book.meaning}'</h2>
		{/if}

		<ul class="tnav">
			{#each Array.from({ length: data.book.chapters }, (_, i) => i + 1) as ch}
				<li><a href="/{data.book.slug}/{ch}">{ch}</a></li>
			{/each}
		</ul>
	</main>
</div>
