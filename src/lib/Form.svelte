<script lang="ts">
    import { onMount } from 'svelte';
	import { number, title } from './stores';
	
	const extractNumberFromTitle = (aTitle: string) => {
		const titleParts = aTitle.split(' ');
		const numberWithTag = titleParts.findLast(part => part.startsWith('#'));
		const issueNumber = numberWithTag?.slice(1);
		if (issueNumber) number.set(issueNumber);
		const titleWithoutNumber = numberWithTag ? titleParts.filter(part => !part.startsWith('#')).join(' ') : aTitle;
		title.set(titleWithoutNumber);
	};

	onMount(() => title.subscribe(extractNumberFromTitle));
</script>

<div class=Form>
	<input class="text-container" placeholder="Number" bind:value={$number} />
	<input class="text-container big-field" placeholder="Title" bind:value={$title} />
</div>

<style>
	.Form {
		display: flex;
		width: 100%;
		gap: 10px;
	}
</style>
