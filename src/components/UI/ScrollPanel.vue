<template>
  <pv-scroll-panel
    :style="{ height: widgetHeight, width: '100%' }"
    class="transition-all duration-500"
  >
    <div class="flex flex-col">
      <div
        v-for="item in list"
        :ref="(el) => addListElement(el as Element)"
        class="cursor-pointer border-b p-2 border-gray-300 flex justify-start items-center hover:bg-gray-100"
      >
        <pv-button class="flex gap-2" @click="$emit('select', item)">
          <img
            v-if="item.imageUrl !== undefined"
            class="flex rounded-full h-10 w-10 object-contain"
            :src="item.imageUrl"
            alt="#"
          />
          <img
            v-else
            class="flex rounded-full h-10 w-10 object-contain"
            :src="listImg"
            alt="#"
          />

          <div class="text-sm">{{ item.name }}</div>
        </pv-button>
      </div>
    </div>
  </pv-scroll-panel>
</template>

<script setup lang="ts">
import PvScrollPanel from "primevue/scrollpanel";
import { reactive, watch, computed } from "vue";

const props = defineProps<{
  list: unknown[];
}>();

//#region Heigth Widget

let listElements: Set<Element> = reactive(new Set<Element>());
const addListElement = (el: Element | null) => {
  if (el) {
    listElements.add(el);
  }
};

watch([props], () => {
  listElements.clear();
});

const widgetHeight = computed(() => {
  const totalHeight = [...listElements.values()]
    .map((el) => el.getBoundingClientRect().height)
    .reduce((prev, curr) => prev + curr, 0);

  return totalHeight > 600 ? "600px" : `${totalHeight}px`;
});

//#endregion Heigth Widget
</script>
