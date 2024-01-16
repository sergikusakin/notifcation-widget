<template>
  <pv-scroll-panel
    :style="{ height: widgetHeight, width: '100%' }"
    class="transition-all duration-200"
  >
    <div class="flex flex-col">
      <div
        v-for="item in list"
        :ref="(el) => addListElement(el as Element)"
        class="cursor-pointer border-b p-2 border-gray-300 flex justify-start flex-col items-center hover:bg-gray-100"
      >
        <slot name="element" :item="item"></slot>
      </div>
    </div>
  </pv-scroll-panel>
</template>

<script setup lang="ts" generic="T">
import PvScrollPanel from "primevue/scrollpanel";
import { reactive, watch, computed } from "vue";

const props = defineProps<{
  list: T[];
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
