<script lang=ts>
	let move = false;
</script>

<svg class="animated-check" class:move viewBox="0 0 24 24">
	<path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" on:animationend />
</svg>

<style>
	.animated-check {
		position: relative;
		height: 25px;
		width: 25px;
	}
	
	.animated-check path {
		stroke: #55a915;
		stroke-width: 4;
		stroke-dasharray: 23;
		stroke-dashoffset: 23;
		stroke-linecap: round;
		stroke-linejoin: round;
		animation: draw 0.3s linear forwards;
	}

	@keyframes draw {
		to { stroke-dashoffset: 0 }
	}
</style>