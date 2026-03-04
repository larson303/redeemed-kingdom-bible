<script>
	import TopNav from '$lib/components/TopNav.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.article.title} - Redeemed Kingdom Bible</title>
</svelte:head>

<TopNav>
	<nav class="breadcrumb">
		<a href="/">Home</a>
		<span class="separator">&rsaquo;</span>
		<span class="current">{data.article.title}</span>
	</nav>
</TopNav>

{@html data.html}
