<template>
  <f-dropdown
    :distance="6"
    placements="right-start"
    style="display: inline-flex"
  >
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
        <!-- search -->

        <div class="flex gap-1 pt-1">
          <Button>
            <template #icon>
              <Icon
                class="flex ml-2 items-center justify-center"
                :icon="searchLine"
              />
            </template>
          </Button>

          <InputText
            class="h-10 w-[246px]"
            v-model="value1"
            placeholder=" Search..."
          />
        </div>

        <!-- organization info -->
        <div class="inline">
          <div
            v-for="item in Array(13)"
            class="m-1 p-2 border border-gray-400 rounded flex gap-2 justify-start items-center"
          >
            <div
              class="rounded-md bg-emerald-500 text-neutral-50 h-10 w-10 flex justify-center items-center text-sm"
            >
              #
            </div>
            <div class="text-sm">Organization name</div>
          </div>
        </div>
      </ScrollPanel>
      <!-- button for add -->
      <div class="flex justify-center">
        <Button
          class="flex justify-center w-[300px] m-1 p-2 border border-gray-400 rounded text-sm"
          >+ Organization
        </Button>
      </div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import InputText from "primevue/inputtext";
import { Icon } from "@iconify/vue";
import searchLine from "@iconify-icons/clarity/search-line";
import ScrollPanel from "primevue/scrollpanel";
import Button from "primevue/button";
import { ref } from "vue";

const value1 = ref();
</script>

<style scoped></style>
