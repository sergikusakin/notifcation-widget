<template>
  <f-dropdown :distance="1" placement="right-end" style="display: inline-flex">
    <!-- This will be the popover reference (for the events and position) -->
    <button>
      <Icon :icon="notificationsIcon" />
    </button>

    <template #popper>
      <!-- You can put other components too -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import { Icon } from "@iconify/vue";
import notificationsIcon from "@iconify-icons/material-symbols/notifications";
</script>

<style scoped>
.dropdown-wrapper {
  display: flex;
  justify-items: start;
  align-items: start;
}
</style>
