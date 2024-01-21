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
      <auto-height-scrollable-list :list="notifications">
        <template #element="slotProps">
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
                  <i-icon class="h-6 w-6" :icon="checkAll" />
                </template>
              </pv-button>
            </div>
          </div>
        </template>
      </auto-height-scrollable-list>

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
import AutoHeightScrollableList from "@/components/UI/AutoHeightScrollableList.vue";

const props = defineProps<{
  notifications: unknown[];
}>();
</script>

<style scoped>
.dropdown-wrapper {
  display: flex;
  justify-items: start;
  align-items: start;
}
</style>
