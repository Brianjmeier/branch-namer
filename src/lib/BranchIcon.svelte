<script>
	import icon from '../../icon.png';
    import Icon from './Icon.svelte';
</script>

<div>
	<Icon className="branch-icon" {icon} size={30}/>
</div>

<style>
	:global(.branch-icon) {
		margin-right: -6px;
	}
</style>
