<script>
	import { onSettings, initials } from './stores';
</script>

<div class=Settings>
	<h3>Complete your initials</h3>
	<input class="text-container" placeholder="Initials" bind:value={$initials} />
</div>

<style>
	.Settings {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 10px;
	}

	.Settings > h3 {
		all: unset;
	}
</style>