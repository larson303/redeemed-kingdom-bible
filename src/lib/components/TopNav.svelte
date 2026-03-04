<script>
	import { theme } from '$lib/stores/theme.js';
	import { nameMode } from '$lib/stores/nameMode.js';
	import { toggleSidebar } from '$lib/stores/sidebar.js';

	let { children } = $props();

	function handleThemeChange(e) {
		theme.set(e.target.value);
	}

	function handleNameModeChange(e) {
		nameMode.set(e.target.value);
	}
</script>

<div class="top-nav">
	<button class="menu-toggle" aria-label="Open book menu" onclick={toggleSidebar}>&#9776; Books</button>

	{@render children?.()}

	<div class="nav-controls">
		<div class="name-switcher">
			<select aria-label="Name display mode" onchange={handleNameModeChange} value={$nameMode}>
				{#each nameMode.modes as mode}
					<option value={mode}>{nameMode.labels[mode]}</option>
				{/each}
			</select>
		</div>
		<div class="theme-switcher">
			<select aria-label="Choose theme" onchange={handleThemeChange} value={$theme}>
				{#each theme.themes as t}
					<option value={t}>{theme.labels[t]}</option>
				{/each}
			</select>
		</div>
	</div>
</div>
