import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'rkb-theme';
const THEMES = ['default', 'dark', 'classic', 'olive'];
const THEME_LABELS = {
	default: 'Parchment',
	dark: 'Night',
	classic: 'Classic',
	olive: 'Olive'
};

function getInitialTheme() {
	if (!browser) return 'default';
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && THEMES.includes(stored)) return stored;
	} catch (e) { /* noop */ }
	if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
	return 'default';
}

function createThemeStore() {
	const { subscribe, set, update } = writable(getInitialTheme());

	function applyTheme(theme) {
		if (!browser) return;
		if (theme === 'default') {
			document.documentElement.removeAttribute('data-theme');
		} else {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}

	// Apply initial theme
	if (browser) {
		applyTheme(getInitialTheme());

		// Listen for OS dark mode changes
		const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
		mq?.addEventListener('change', (e) => {
			try {
				if (!localStorage.getItem(STORAGE_KEY)) {
					const newTheme = e.matches ? 'dark' : 'default';
					set(newTheme);
					applyTheme(newTheme);
				}
			} catch (err) { /* noop */ }
		});
	}

	return {
		subscribe,
		set: (theme) => {
			if (!THEMES.includes(theme)) theme = 'default';
			set(theme);
			applyTheme(theme);
			if (browser) {
				try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* noop */ }
			}
		},
		themes: THEMES,
		labels: THEME_LABELS
	};
}

export const theme = createThemeStore();
