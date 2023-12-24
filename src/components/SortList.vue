<template>
  <FDropdown :distance="6" placements="right" style="display: inline-flex">
    <!-- This will be the popover reference (for the events and position) -->
    <button class="border-4">
      <div class="m-1 rounded-full w-10 h-10 bg-red-600"></div>
    </button>

    <!-- This will be the content of the popover -->
    <template #popper>
      <ScrollPanel
        style="width: 100%; height: 500px"
        class="transition-all duration-500"
      >
        <!-- organization info -->
        <div class="inline">
          <div
            v-for="item in Array(13)"
            class="m-1 p-2 border-2 border-gray-400 rounded flex gap-2 justify-start items-center"
          >
            <div
              class="rounded-md bg-emerald-500 h-10 w-10 flex justify-center items-center text-sm"
            >
              Icon
            </div>
            <div>Organization name</div>
          </div>
        </div>
      </ScrollPanel>
      <!-- button for add -->
      <div class="flex justify-center">
        <Button
          class="flex justify-center w-60 m-1 p-2 border-2 border-gray-400 rounded"
          >+ Organization
        </Button>
      </div>
    </template>
  </FDropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import ScrollPanel from "primevue/scrollpanel";
import Button from "primevue/button";
</script>

<style scoped></style>
