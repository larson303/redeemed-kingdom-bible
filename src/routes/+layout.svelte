<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { sidebarOpen, closeSidebar } from '$lib/stores/sidebar.js';

	let { children } = $props();
</script>

<svelte:head>
	<title>Redeemed Kingdom Bible</title>
</svelte:head>

<div class="page-wrapper">
	<Sidebar open={$sidebarOpen} onclose={closeSidebar} />

	<div class="content-wrapper">
		{@render children()}
	</div>
</div>
