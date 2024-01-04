<template>
  <f-dropdown
    :distance="1"
    placement="right-start"
    style="display: inline-flex"
    :disabled="sm"
  >
    <!-- This will be the popover reference (for the events and position) -->
    <pv-button class="flex justify-center" @click="toggleFullscreen">
      <img
        class="flex rounded-full h-10 w-10 object-contain"
        src="../assets/img/KUSAKINS-favicon.png"
        alt="#"
      />
    </pv-button>

    <pv-sidebar v-model:visible="visible" header="Sidebar" position="full">
      <p>Lorem</p>
    </pv-sidebar>

    <!-- This will be the content of the popover -->
    <template #popper>
      <!-- search -->
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
        <!-- organization info -->
        <div class="inline">
          <div
            v-for="item in Array(13)"
            class="cursor-pointer m-1 p-2 border border-gray-400 rounded flex justify-start items-center"
          >
            <pv-button class="gap-2">
              <img
                class="flex rounded-full h-10 w-10 object-contain"
                src="../assets/img/KUSAKINS-favicon.png"
                alt="#"
              />
              <div class="text-sm">Organization name</div>
            </pv-button>
          </div>
        </div>
      </pv-scroll-panel>

      <!-- button for add -->

      <pv-button
        class="flex justify-center h-12 w-[300px] bg-blue-100 rounded-none border-gray-400 text-sm"
        >+ Organization
      </pv-button>
    </template>
  </f-dropdown>

  <!-- <div class="font-mono">
    <div>Current breakpoints: {{ current }}</div>
    <div>xs(&lt;{{ smWidth }}px): <BooleanDisplay :value="xs" /></div>
    <div>xs(&lt;={{ smWidth }}px): <BooleanDisplay :value="xse" /></div>
    <div>sm: <BooleanDisplay :value="sm" /></div>
    <div>md: <BooleanDisplay :value="md" /></div>
    <div>lg: <BooleanDisplay :value="lg" /></div>
    <div>xl: <BooleanDisplay :value="xl" /></div>
    <div>2xl: <BooleanDisplay :value="xxl" /></div>
  </div> -->
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import PvInputText from "primevue/inputtext";
import { Icon as IIcon } from "@iconify/vue";
import searchLine from "@iconify-icons/clarity/search-line";
import PvScrollPanel from "primevue/scrollpanel";
import PvButton from "primevue/button";
import PvSidebar from "primevue/sidebar";

import { computed, ref, watch } from "vue";

const visible = ref(false);

const value1 = ref();

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual("sm");
watch(sm, (val) => {
  if (val === false) {
    visible.value = false;
  }
});

const toggleFullscreen = () => {
  if (sm.value) {
    visible.value = true;
  }
};
</script>

<style scoped></style>
