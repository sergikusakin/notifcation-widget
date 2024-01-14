<template>
  <div
    class="flex flex-col justify-between h-screen pb-5 p-1 w-[65px] border-r border-r-gray-300"
  >
    <div class="flex flex-col justify-center items-center gap-2 pt-8 w-full">
      <OrganizationSelect />
    </div>
    <div class="flex flex-col justify-center items-center gap-2 w-full">
      <Notifications :notifications="Array(12).fill('banana')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Notifications from "../components/Notifications.vue";
import OrganizationSelect from "../components/OrganizationSelect.vue";
</script>

<style scoped></style>
