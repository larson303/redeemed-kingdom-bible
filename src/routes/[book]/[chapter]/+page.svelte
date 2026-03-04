<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import TopNav from '$lib/components/TopNav.svelte';
	import { nameMode } from '$lib/stores/nameMode.js';

	let { data } = $props();

	function getBookName(book) {
		if ($nameMode === 'standard') return book.english;
		if ($nameMode === 'corrected') return book.transliteration;
		return book.english;
	}

	function handleChapterChange(e) {
		goto(`/${data.book.slug}/${e.target.value}`);
	}

	function handleKeydown(e) {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

		if (e.key === 'ArrowLeft' && data.prev) {
			goto(`/${data.prev.book}/${data.prev.chapter}`);
		} else if (e.key === 'ArrowRight' && data.next) {
			goto(`/${data.next.book}/${data.next.chapter}`);
		}
	}
</script>

<svelte:head>
	<title>{data.book.english} {data.chapter} - Redeemed Kingdom Bible</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<TopNav>
	<nav class="breadcrumb">
		<a href="/">Home</a>
		<span class="separator">&rsaquo;</span>
		<a href="/{data.book.slug}">{getBookName(data.book)}</a>
		<span class="separator">&rsaquo;</span>
		<span class="current">Chapter {data.chapter}</span>
	</nav>

	<div class="chapter-nav">
		<select aria-label="Select chapter" onchange={handleChapterChange} value={data.chapter}>
			{#each Array.from({ length: data.book.chapters }, (_, i) => i + 1) as ch}
				<option value={ch}>Chapter {ch}</option>
			{/each}
		</select>
	</div>

	<div class="prev-next">
		{#if data.prev}
			<a href="/{data.prev.book}/{data.prev.chapter}" title="Previous">&larr;</a>
		{:else}
			<span class="disabled" title="Previous">&larr;</span>
		{/if}
		{#if data.next}
			<a href="/{data.next.book}/{data.next.chapter}" title="Next">&rarr;</a>
		{:else}
			<span class="disabled" title="Next">&rarr;</span>
		{/if}
	</div>
</TopNav>

{@html data.html}
