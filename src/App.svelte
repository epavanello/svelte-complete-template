<script lang="ts">
  import Tailwind from "./Tailwind.svelte";

  export let appName: string;
</script>

<style lang="scss">
</style>

<Tailwind />
<header class="shadow-md">
  <div class="max-w-4xl mx-auto flex">
    <h1 class="font-medium text-3xl py-4">Wellcome to {appName}!</h1>
  </div>
</header>
<main class="max-w-4xl mx-auto py-4">
  <!-- Add code HERE -->
  <p class="max-w-4xl mx-auto">
    Star on GitHub <a
      class="hover:underline font-bold"
      href="https://github.com/epavanello/svelte-complete-template"
      title="GitHub Repo">
      <svg
        class="text-red-600 stroke-current inline-block"
        width="20"
        height="20">
        <use xlink:href="#github">
          <svg id="github" viewBox="0 0 24 24">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </use>
      </svg>
    </a>
    <a
      class="hover:underline font-bold"
      href="https://github.com/epavanello/svelte-complete-template"
      title="GitHub Repo">
      svelte-complete-template</a>
  </p>
</main>
<footer class="bottom-0 fixed left-0 right-0">
  <p class="max-w-4xl mx-auto text-xs text-center py-2">
    🎁 Gift by <a class="hover:underline font-bold" href="https://github.com/epavanello" target="_blank">Pavanello
      Emanuele</a>
  </p>
</footer>
