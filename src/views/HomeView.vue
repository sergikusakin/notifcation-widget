<template>
  <div><SortList /></div>
  <div class="flex items-end h-screen pb-10">
    <Notifications />
  </div>
</template>

<script setup lang="ts">
import Notifications from "../components/Notifications.vue";
import SortList from "@/components/SortList.vue";
</script>

<style scoped></style>
