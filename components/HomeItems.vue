<template>
  <div class="items">
    <a
      class="item bg-gray-950 bg-opacity-80 w-96 max-md:w-80 drop-shadow p-6 rounded-lg hover:bg-opacity-100 mb-6 hover:scale-105 transition-all ease-in duration-300 block "
      :href="item.url"
      target="_blank"
      v-for="item in items"
    >
      <h3 class="text-white text-3xl leading-relaxed">
        {{ item.title }}
        <span class="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
      </h3>
      <p class="text-xl text-white text-opacity-50">
        {{ item.techs }}
      </p>
    </a>

   
  </div>
</template>

<script setup>
const props = defineProps(["items"]);
</script>
