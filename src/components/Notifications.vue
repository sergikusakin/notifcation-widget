<template>
  <f-dropdown :distance="1" placement="right-end" class="w-full">
    <!-- This will be the popover reference (for the events and position) -->

    <div class="p-overlay-badge w-full">
      <pv-button
        severity="danger"
        aria-label="Notifications"
        class="flex justify-center w-full"
      >
        <template #icon>
          <i-icon class="h-8 w-8" :icon="notificationsIcon" />
        </template>
      </pv-button>
      <pv-badge value="2" severity="danger" />
    </div>

    <template #popper>
      <!-- You can put other components too -->
      <pv-scroll-panel
        :style="{ height: widgetHeight, width: '350px' }"
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
              <pv-button
                size="small"
                outlined
                class="p-1 text-xs"
                type="button"
                label="Action"
                severity="info"
              />
              <pv-button
                size="small"
                outlined
                class="p-1 text-xs"
                type="button"
                label="Another action"
                severity="help"
              />
            </div>

            <div class="flex justify-end">
              <pv-button>
                <template #icon>
                  <i-icon class="h-8 w-8" :icon="checkAll" />
                </template>
              </pv-button>
            </div>
          </div>
        </div>
      </pv-scroll-panel>

      <!-- control -->
      <div class="flex justify-between p-1 bg-yellow-500 w-[350px]">
        <pv-button>
          <template #icon>
            <i-icon class="h-10 w-10" :icon="bellOff" :horizontalFlip="true" />
          </template>
        </pv-button>

        <pv-button>
          <template #icon>
            <i-icon
              class="h-10 w-10"
              :icon="listOutline"
              :horizontalFlip="true"
            />
          </template>
        </pv-button>
      </div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import { Icon as IIcon } from "@iconify/vue";
import notificationsIcon from "@iconify-icons/material-symbols/notifications";
import checkAll from "@iconify-icons/codicon/check-all";
import listOutline from "@iconify-icons/solar/list-outline";
import bellOff from "@iconify-icons/mdi/bell-off";
import PvBadge from "primevue/badge";
import PvButton from "primevue/button";
import PvScrollPanel from "primevue/scrollpanel";
import { ref, watch, reactive } from "vue";

let notificationElements: Set<Element> = reactive(new Set<Element>());
const addNotificationElement = (el: Element | null) => {
  if (el) {
    notificationElements.add(el);
  }
};

const notifications = reactive<string[]>(Array(12));
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
