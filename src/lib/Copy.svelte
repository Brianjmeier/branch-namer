<script lang="ts">
	import Copied from "./Copied.svelte";

	export let text: string;
	export let label: string;

	let animateText = false;
	let animateIcon = false;
	let copied = false;
	let resetting = false;

	const copy = () => {
		navigator.clipboard.writeText(text);
		copied = true;
	};

	const wait = async (delay: number) => {
		await new Promise((resolve) => setTimeout(resolve, delay));
	};

	const waitAndReset = async () => {
		await wait(2000);
		resetting = true;
		await wait(500);
		animateText = false;
		animateIcon = false;
		copied = false;
		resetting = false;
	};
</script>

<button class:copied class:resetting on:click={() => (animateText = true)}>
	{#if copied}
		<Copied {label} on:animationend={waitAndReset} />
	{:else}
		<div class:animateIcon on:animationend={copy}><slot /></div>
		<p class:animateText on:animationend={() => (animateIcon = true)}>
			Copy {label}!
		</p>
	{/if}
</button>

<style>
	button {
		display: flex;
		gap: 5px;
		width: 100%;
		font-weight: 400;
		font-size: 15px;
		color: #6c757d;
		text-align: center;
		vertical-align: bottom;
		user-select: none;
		background-color: transparent;
		padding: 0.375rem 0.75rem;
		line-height: 1.5;
		border-radius: 0.25rem;
		border: 1px solid #ced4da;
		min-height: 44px;
		align-items: center;
		justify-content: center;
		clip-path: circle(100%);
		transition: border 1.5ms ease-in, clip-path .3s
	}

	.animateText {
		animation: type .3s linear forwards;
	}

	.animateIcon {
		animation: fadeOut .3s linear forwards;
	}

	.copied {
		border: 1px solid #55a915;
	}
	
	.resetting {
		clip-path: circle(0);
	}

	p {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		margin: 0;
	}

	@keyframes fadeOut {
		to {
			opacity: 0;
		}
	}

	@keyframes type {
		to {
			width: 0;
		}
	}
</style>
