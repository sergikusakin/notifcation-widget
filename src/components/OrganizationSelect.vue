<template>
  <f-dropdown
    :distance="1"
    placement="right-start"
    style="display: inline-flex"
  >
    <!-- This will be the popover reference (for the events and position) -->
    <pv-button class="flex justify-center">
      <div class="m-1 rounded-full w-10 h-10 bg-red-600"></div>
    </pv-button>

    <!-- This will be the content of the popover -->
    <template #popper>
      <div class="relative h-12 p-1 border-b border-b-gray-300">
        <i-icon
          class="flex ml-2 items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none"
          :icon="searchLine"
        />
        <pv-input-text
          class="w-full pl-8 h-full"
          v-model="value1"
          placeholder="Search..."
        />
      </div>
      <pv-scroll-panel
        style="width: 100%; height: 500px"
        class="transition-all duration-500"
      >
        <!-- search -->

        <!-- organization info -->
        <div class="inline">
          <div
            v-for="item in Array(13)"
            class="cursor-pointer m-1 p-2 border border-gray-400 rounded flex gap-2 justify-start items-center"
          >
            <div
              class="rounded-md bg-emerald-500 text-neutral-50 h-10 w-10 flex justify-center items-center text-sm"
            >
              #
            </div>
            <div class="text-sm">Organization name</div>
          </div>
        </div>
      </pv-scroll-panel>
      <!-- button for add -->
      <div class="flex justify-center">
        <pv-button
          class="flex justify-center w-[300px] m-1 p-2 border border-gray-400 rounded text-sm"
          >+ Organization
        </pv-button>
      </div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import PvInputText from "primevue/inputtext";
import { Icon as IIcon } from "@iconify/vue";
import searchLine from "@iconify-icons/clarity/search-line";
import PvScrollPanel from "primevue/scrollpanel";
import PvButton from "primevue/button";
import { ref } from "vue";

const value1 = ref();
</script>

<style scoped></style>
