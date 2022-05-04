<script setup>
import { reactive } from "vue";
const winHeight = reactive(window.innerHeight * 0.75);
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="svg-container">
    <svg
      class="svg-content"
      :height="winHeight"
      viewBox="0 0 849 812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_24_21)">
        <rect x="4" width="841" height="802" rx="60" fill="#F3F5F3" />
        <rect
          x="14"
          y="10"
          width="821"
          height="782"
          rx="50"
          stroke="#F6E859"
          stroke-width="20"
        />
      </g>
      <rect
        x="29"
        y="25"
        width="791"
        height="752"
        rx="35"
        fill="#F3F5F3"
        stroke="#87BAF1"
        stroke-width="10"
      />
      <rect x="34" y="59" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="98" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="215" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="254" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="137" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="176" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="527" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="566" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="683" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="722" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="605" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="644" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="293" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="332" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="449" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="488" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="371" width="781" height="17" fill="#C6E5EF" />
      <rect x="34" y="410" width="781" height="17" fill="#C6E5EF" />
      <defs>
        <filter
          id="filter0_d_24_21"
          x="0"
          y="0"
          width="849"
          height="812"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_24_21"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_24_21"
            result="shape"
          />
        </filter>
      </defs>
      <image class="shadow" x="23%" y="15%" :href="imageUrl" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.svg-container {
  display: block;
  margin: auto;
}
.shadow {
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  /* Similar syntax to box-shadow */
}
</style>