<script lang=ts>
	export let className: string = '';
	export let icon: string;
	export let size: number = 20;

	$: sizeString = `${size}px`;
	$: style = `vertical-align:-${size / 4}px`;
</script>

<img class={className} src={icon} width={sizeString} style={style} alt="Commit" />
