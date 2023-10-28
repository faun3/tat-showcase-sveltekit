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
  <img
    transition:fly={{ duration: 0, x: -300, opacity: 0, easing: linear }}
    src="/images/heroImage.png"
    alt=""
    class="w-[51.25rem] h-[47.25rem] object-cover"
  />
{/if}
