<template>
  <!-- container -->
  <div
    class="tw-bg-zinc-900 tw-p-10 tw-text-white tw-flex tw-flex-col tw-items-center tw-gap-52 tw-h-screen"
  >
    <div class="me tw-flex tw-flex-col tw-gap-2">
      <img
        src="../assets/eu.png"
        alt="img"
        class="tw-rounded-full tw-h-40 tw-w-40"
      />
      <div>
        <h2 class="tw-text-3xl">Lenon Lencina</h2>
        <p class="tw-text-lg">Software Developer</p>
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-gap-6">
      <Card name="github" icon="github" />
      <Card name="linkedin" icon="linkedin-in" />
      <Card name="carreer" icon="suitcase" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/GenericCard.vue";

export default {
  name: "HomeView",
  components: { Card },
};
</script>

<style scoped>
.me {
  animation: down 0.6s;
}

@keyframes down {
  0% {
    opacity: 0%;
    transform: translateY(-30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
