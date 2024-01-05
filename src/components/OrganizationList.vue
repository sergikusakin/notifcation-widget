<template>
  <div class="">
    <!-- search -->
    <div class="relative h-12 border-b border-b-gray-300 flex">
      <i-icon
        class="flex ml-2 items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none"
        :icon="searchLine"
      />
      <pv-input-text
        class="grow pl-8 h-full border-none"
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

      <div class="flex flex-col">
        <div
          v-for="item in Array(13)"
          class="cursor-pointer border-b p-2 border-gray-300 flex justify-start items-center hover:bg-gray-100"
        >
          <pv-button class="flex gap-2">
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
      class="flex justify-center h-12 w-full bg-blue-100 rounded-none text-sm"
      @click="$emit('create')"
      >+ Organization
    </pv-button>
  </div>
</template>

<script lang="ts">
export type OrganizationOption = {
  id: string;
  name: string;
  imageUrl?: string;
};
</script>

<script setup lang="ts">
import PvButton from "primevue/button";
import PvInputText from "primevue/inputtext";
import { Icon as IIcon } from "@iconify/vue";
import searchLine from "@iconify-icons/clarity/search-line";
import PvScrollPanel from "primevue/scrollpanel";
import { ref } from "vue";

const search = defineModel<string>("search");

const emit = defineEmits<{
  create: [];
}>();

// const props = defineProps<{
//   search: string;
// }>();

// const emits = defineEmits<{
//   "update:search": [val: string];
// }>();
</script>
