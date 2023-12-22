<template>
  <f-dropdown :distance="1" placement="right-end" style="display: inline-flex">
    <!-- This will be the popover reference (for the events and position) -->

    <Button
      aria-label="Notifications"
      class="flex justify-center"
      style="overflow: unset"
    >
      <div class="p-overlay-badge">
        <Badge value="2" severity="danger" />
        <Icon class="h-10 w-10" :icon="notificationsIcon" />
      </div>
    </Button>

    <template #popper>
      <!-- You can put other components too -->
      <ScrollPanel
        :style="{ height: widgetHeight, width: '100%' }"
        class="transition-all duration-500"
      >
        <div
          v-for="item in notifications"
          :ref="(el) => addNotificationElement(el as Element)"
          class="pt-1 border-b border-slate-400 w-[350px]"
        >
          <!-- text and avatar of notification -->
          <div class="flex p-2">
            <div class="rounded-full w-10 h-10 bg-yellow-300"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex gap-2 justify-center">
              <Button
                size="small"
                outlined
                class="p-1 text-xs"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                size="small"
                outlined
                class="p-1 text-xs"
                type="button"
                label="Another action"
                severity="help"
              />
            </div>

            <div class="flex justify-end">
              <Button>
                <template #icon>
                  <Icon class="h-10 w-10" :icon="checkboxMarked" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </ScrollPanel>

      <!-- control -->
      <div class="flex justify-between p-1 bg-yellow-500 w-[350px]">
        <Button>
          <template #icon>
            <Icon class="h-10 w-10" :icon="bellOff" :horizontalFlip="true" />
          </template>
        </Button>

        <Button>
          <template #icon>
            <Icon
              class="h-10 w-10"
              :icon="listOutline"
              :horizontalFlip="true"
            />
          </template>
        </Button>
      </div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import { Icon } from "@iconify/vue";
import notificationsIcon from "@iconify-icons/material-symbols/notifications";
import checkboxMarked from "@iconify-icons/mdi/checkbox-marked";
import listOutline from "@iconify-icons/solar/list-outline";
import bellOff from "@iconify-icons/mdi/bell-off";
import Badge from "primevue/badge";
import Button from "primevue/button";
import ScrollPanel from "primevue/scrollpanel";
import {
  computed,
  onBeforeUpdate,
  ref,
  watch,
  type VNodeRef,
  onUpdated,
  onMounted,
  reactive,
  onBeforeUnmount,
} from "vue";

let notificationElements: Set<Element> = reactive(new Set<Element>());
const addNotificationElement = (el: Element | null) => {
  if (el) {
    notificationElements.add(el);
  }
};

const notifications = reactive<string[]>(Array(6));
watch([notifications], () => {
  notificationElements.clear();
});

const widgetHeight = ref<string>("0px");
watch(
  [notifications, notificationElements],
  () => {
    const totalHeight = [...notificationElements.values()]
      .map((el) => el.getBoundingClientRect().height)
      .reduce((prev, curr) => prev + curr, 0);

    widgetHeight.value = totalHeight > 600 ? "600px" : `${totalHeight}px`;

    console.log(notificationElements);
  },
  { deep: true, immediate: true }
);

// const interval = setInterval(() => notifications.pop(), 3000);
// onBeforeUnmount(() => {
//   clearInterval(interval);
// });
</script>

<style scoped>
.dropdown-wrapper {
  display: flex;
  justify-items: start;
  align-items: start;
}
</style>
