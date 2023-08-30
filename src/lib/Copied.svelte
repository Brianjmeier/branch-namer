<script lang=ts>
	import CheckMark from './CheckMark.svelte'
	export let label : string;

	const capitalize = (s: string) => {
		return s.charAt(0).toUpperCase() + s.slice(1)
	}

	let animate = false;

</script>

<div class="Copied" class:animate>
	<CheckMark on:animationend={() => animate=true} on:animationend/>
	<p class:animate>{capitalize(label)} copied!</p>
</div>

<style>
	.Copied {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		width: 100%;
		transition: border .5s linear forwards;
	}

	p {
		margin: 0;
		width: 0;
		overflow: hidden;
		white-space: nowrap;
		color: #428410;
	}

	.animate {
		animation: type .5s linear forwards;
	}

	.animate {
		border-color: #55a915;
	}

	@keyframes type {
		to { width: 100% }
	}
</style>