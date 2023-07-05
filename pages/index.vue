<template>
  <div
    class="flex flex-1 justify-between items-center w-[960px] max-lg:w-full max-lg:flex-col max-lg:justify-center mx-auto h-full"
  >
    <div class="introduction w-96 max-lg:w-full max-lg:text-center max-lg:mb-10 max-lg:flex max-lg:items-center max-lg:flex-col">
      <h1
        class="text-white text-6xl leading-relaxed line-1 anim-typewriter max-lg:text-5xl text-center"
      >
        Reza Haidari
      </h1>
      <h2
        :class="[
          'text-white text-opacity-50 text-3xl  transition-all duration-500 ease-in ' +
            (showDescription ? 'opacity-100' : 'opacity-0'),
        ]"
      >
        Javascript Developer
      </h2>
    </div>
    <div>
      <HomeItems
        :class="[
          'transition-all duration-500 ease-in ' +
            (showDescription ? 'opacity-100' : 'opacity-0'),
        ]"
        :items="data"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = useFetch("/api/data");
let showDescription = ref(false);

onMounted(() => {
  console.log("Hello");
  setTimeout(() => {
    showDescription.value = true;
  }, 2000);
});
</script>

<style scoped>
.line-1 {
  position: relative;
  width: 1;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
}
.anim-typewriter {
  animation: typewriter 1.3s steps(22) 1s 1 normal both,
    blinkTextCursor 500ms steps(22) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 6.3em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
