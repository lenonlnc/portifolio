<template>
  <!-- container -->
  <div class="tw-bg-zinc-900 tw-text-white tw-flex tw-h-screen">
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "HomeView",
  components: { SideBar },
};
</script>
