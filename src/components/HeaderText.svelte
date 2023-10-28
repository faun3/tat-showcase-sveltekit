<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { expoIn, linear } from "svelte/easing";
  let animate: boolean;
  onMount(() => {
    animate = true;
  });
</script>

{#if animate}
  <p
    transition:fly={{ x: -300, duration: 500, easing: linear }}
    class="text-[9rem] absolute top-0 right-0 rotate-90 translate-y-[110%] translate-x-[53%] font-garamond text-outline-cream font-semibold uppercase"
  >
    Gallery
  </p>
{/if}
