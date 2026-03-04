import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'rkb-name-mode';
const MODES = ['both', 'standard', 'corrected'];
const MODE_LABELS = {
	both: 'Both Names',
	standard: 'English Only',
	corrected: 'Hebrew Only'
};

function getInitialMode() {
	if (!browser) return 'both';
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && MODES.includes(stored)) return stored;
	} catch (e) { /* noop */ }
	return 'both';
}

function createNameModeStore() {
	const { subscribe, set } = writable(getInitialMode());

	function applyMode(mode) {
		if (!browser) return;
		document.documentElement.setAttribute('data-name-mode', mode);
	}

	if (browser) {
		applyMode(getInitialMode());
	}

	return {
		subscribe,
		set: (mode) => {
			if (!MODES.includes(mode)) mode = 'both';
			set(mode);
			applyMode(mode);
			if (browser) {
				try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) { /* noop */ }
			}
		},
		modes: MODES,
		labels: MODE_LABELS
	};
}

export const nameMode = createNameModeStore();
