<template>
  <!-- search -->
  <div class="relative h-12 p-1 border-b border-b-gray-300">
    <i-icon
      class="flex ml-2 items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none"
      :icon="searchLine"
    />
    <pv-input-text
      class="w-full pl-8 h-full"
      v-model="search"
      placeholder="Search..."
    />
  </div>
  <!-- scroll panel -->
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
    v-model="create"
    >+ Organization
  </pv-button>
</template>

<script setup lang="ts">
import PvButton from "primevue/button";
import PvInputText from "primevue/inputtext";
import { Icon as IIcon } from "@iconify/vue";
import searchLine from "@iconify-icons/clarity/search-line";
import PvScrollPanel from "primevue/scrollpanel";
import { ref } from "vue";

const search = defineModel<string>("search");

const create = defineEmits<any>("create");

// const props = defineProps<{
//   search: string;
// }>();

// const emits = defineEmits<{
//   "update:search": [val: string];
// }>();
</script>
