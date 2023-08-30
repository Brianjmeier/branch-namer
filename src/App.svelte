<script lang="ts">
  import Overlay from './Overlay.svelte';
  import Footer from "./lib/Footer.svelte";
  import Title from "./lib/Title.svelte";
  import Form from "./lib/Form.svelte";
</script>

<!-- <main> -->
<main>
  <Title/>
  <Form />
  <Footer />
  <Overlay/>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
</style>
