<script>
  import SlidingImage from "./SlidingImage.svelte";
</script>

<div class="w-full flex justify-center items-center bg-stone">
  <div
    class="z-[999] w-fit flex gap-[4rem] translate-x-[-15%] pb-[9rem] pt-[13rem]"
  >
    <SlidingImage src="/images/galleryImg1.png" />
    <SlidingImage src="/images/galleryImg2.png" />
    <SlidingImage src="/images/galleryImg3.png" />
  </div>
</div>
