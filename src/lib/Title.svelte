<script lang="ts">
    import SettingsButton from './SettingsButton.svelte';
</script>

<div class=Title>
    <h3>Branch Namer</h3>
    <SettingsButton/>
</div>

<style>
  .Title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  .Title > h3 {
    font-size: 30px;
    text-align: center;
    color: gray;
    font-family: "Helvetica Neue";
    font-weight: normal;
    align-self: center;
    margin: 0;
    white-space: nowrap;
  }
</style>

