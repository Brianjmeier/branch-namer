<script lang="ts">
	import { number, title } from './stores';
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
