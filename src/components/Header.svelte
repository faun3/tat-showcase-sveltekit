<script lang="ts">
  import HeaderImage from "./HeaderImage.svelte";
  import HeaderText from "./HeaderText.svelte";
</script>

<div class="w-full bg-ink flex justify-center">
  <!-- wrapper for max widths -->
  <div class="w-[90rem] h-[64rem] px-[3rem] py-[4rem]">
    <div class="h-full flex flex-col justify-end">
      <div class="flex justify-between w-full">
        <div class="relative w-fit h-fit">
          <HeaderImage />
          <HeaderText />
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <svg
              width="132"
              height="73"
              viewBox="0 0 132 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M99.933 31.2291L99.933 31.229C99.9478 30.9339 100.25 30.7403 100.522 30.8475C101.513 31.238 102.51 31.6265 103.507 32.015C108.247 33.8627 112.993 35.7126 117.176 37.8052C122.255 40.3459 126.328 43.1627 128.514 46.5932C133.153 53.8757 131.045 63.505 123.826 68.1046C116.606 72.7041 106.988 70.5448 102.348 63.2624C100.169 59.8419 99.3772 54.9024 99.2442 49.1849C99.1445 44.8973 99.414 40.2989 99.6819 35.728C99.7702 34.2213 99.8583 32.7176 99.933 31.2291ZM97.5902 12.6624C93.9212 25.6736 84.9168 48.9273 65.4857 61.3062C46.0546 73.6853 21.1742 72.0185 7.8314 69.8451C3.0256 69.0622 0.131801 64.5198 1.45332 59.8335C5.1224 46.8223 14.1267 23.5686 33.5579 11.1896C52.9889 -1.18937 77.8694 0.477283 91.2121 2.65079C96.0178 3.43371 98.9116 7.97608 97.5902 12.6624ZM61.5716 55.1623C72.0178 48.5073 75.0912 34.6443 68.4361 24.198C61.7813 13.7519 47.9182 10.6785 37.472 17.3335C27.0259 23.9884 23.9525 37.8515 30.6074 48.2976C37.2624 58.7439 51.1254 61.8172 61.5716 55.1623Z"
                stroke="#EDE5DA"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="flex flex-col items-end text-[3rem]">
            <span class="text-outline-cream-thin font-garamond">27</span>
            <span class="text-outline-cream-thin font-garamond">10</span>
            <span class="text-outline-cream-thin font-garamond">23</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
