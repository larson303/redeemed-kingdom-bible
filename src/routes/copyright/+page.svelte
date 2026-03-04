<script>
	import TopNav from '$lib/components/TopNav.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>License - Redeemed Kingdom Bible</title>
</svelte:head>

<TopNav>
	<nav class="breadcrumb">
		<a href="/">Home</a>
		<span class="separator">&rsaquo;</span>
		<span class="current">License</span>
	</nav>
</TopNav>

{@html data.html}
