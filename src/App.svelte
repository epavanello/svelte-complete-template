<script lang="ts">
  import Tailwind from "./Tailwind.svelte";
  import Home from "./Home.svelte";
  import Footer from "./Footer.svelte";

  export let appName: string;
</script>

<style lang="scss">
  header {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    h1 {
      font-size: 36px;
    }
  }
</style>

<Tailwind />
<header>
  <div class="max-w-4xl mx-auto flex">
    <h1 class="font-medium py-4">Wellcome to {appName}!</h1>
  </div>
</header>
<Home />
<Footer />
