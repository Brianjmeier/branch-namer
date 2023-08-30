<script lang="ts">
	import Cog from "svelte-material-icons/Cog.svelte";
	import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
	import { initials, settings } from "./stores";
    import type { AnimationEventHandler } from "svelte/elements";

	const handleAnimationEnd : AnimationEventHandler<HTMLDivElement> = () => {
		if (closing) settings.closed();
	}

	settings.subscribe(console.log);

	$: closing = $settings.closing;
	$: opened = $settings.opened;
</script>

<div class="settings">
	<div class=container class:opened class:closing on:animationend={handleAnimationEnd}>
		<button on:click={settings.close}>
			<ArrowLeft size=24/>
		</button>
		<input
			class="text-container"
			placeholder="Initials"
			bind:value={$initials}
		/>
	</div>
	<button class:hidden={opened} on:click={settings.open}>
		<Cog size=24 />
	</button>
</div>

<style>
	button {
		all: unset;
		cursor: pointer;
		animation: moveIn 0.3s;
	}

	.settings {
		display: flex;
		margin-left: auto;
	}

	.container {
		display: flex;
		width: 120px;
		gap: 10px;
		transition: opacity 0.3s;
		opacity: 0;
		pointer-events: none;
	}
	
	.container.opened {
		pointer-events: all;
		opacity: 1;
		animation: grow 0.3s;
	}
	
	.container.closing {
		animation: move 0.3s;
		opacity: 0;
		width: 0;
	}

	.hidden {
		display: none;
	}

	@keyframes grow {
		from { width: 0 }
		to { width: 120px }
	}

	@keyframes move {
		from {transform: translateX(-120px);}
		to {transform: translateX(-270px);}
	}

	@keyframes moveIn {
		from {transform: translateX(100px);}
		to {transform: translateX(0px);}
	}

</style>
