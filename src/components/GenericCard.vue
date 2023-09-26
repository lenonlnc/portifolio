<template>
  <div class="card tw-bg-zinc-800 tw-p-4 tw-rounded tw-w-max tw-cursor-pointer">
    <font-awesome-icon
      v-if="name == 'github' || name == 'linkedin'"
      class="tw-h-52 tw-w-52"
      :icon="['fab', `${icon}`]"
    />
    <font-awesome-icon
      v-else
      class="tw-h-52 tw-w-52"
      :icon="['fas', `${icon}`]"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
  },
};
</script>

<style scoped>
.card {
  animation: down 0.9s;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

@keyframes down {
  0% {
    opacity: 0%;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card:hover {
  transform: translateY(-10px);
  background-color: #6082b6;
  color: white;
}
</style>
