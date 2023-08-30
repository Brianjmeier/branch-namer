import { writable, type Writable } from "svelte/store";

const createPersistedStoreWith = (key: string, initialValue: string) : Writable<string> => {
	const localStorageKey = `branch-namer-${key}`;
	const localStoreValue = localStorage.getItem(localStorageKey) ?? initialValue;
	const store = writable(localStoreValue);
	store.subscribe(value => {
		localStorage.setItem(localStorageKey, value);
	});
	return store;
}

export const initials = createPersistedStoreWith("initials", "");
export const number = createPersistedStoreWith("number", "");
export const title = createPersistedStoreWith("title", "");

const settingsStore = writable({
	opened: false,
	closing: false,
});

export const settings = {
	subscribe: settingsStore.subscribe,
	open: () => (
		settingsStore.update( value => ({
			...value,
			opened: true,
		}))
	),
	close: () => (
		settingsStore.update( value => ({
			...value,
			closing: true,
		}))
	),
	closed: () => (
		settingsStore.update( _ => ({
			opened: false,
			closing: false,
		}))
	)
}
