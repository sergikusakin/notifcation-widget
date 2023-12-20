<template>
  <br />
  <br />
  <br />
  <br />

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
      <div class="p-2">
        <div class="border-2">
          <div class="p-2 h-20 w-80">
            <div class="rounded-full"></div>
            Imagen and text
            <p>Nofitication description and some additional information</p>
          </div>
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1"
                type="button"
                label="Another action"
                severity="help"
              />
            </div>

            <div class="flex justify-end border-2">
              <Button>
                <template #icon>
                  <Icon class="h-10 w-10" :icon="checkboxMarked" />
                </template>
              </Button>
            </div>
          </div>
          <div class="border-2">2</div>
          <div class="border-2">3</div>
          <div class="border-2">4</div>
          <div class="border-2">5</div>
          <div class="border-2">6</div>
          <div class="border-2">7</div>
          <div class="border-2">8</div>
          <div class="border-2">9</div>
          <div>silent mode</div>
        </div>
      </div>
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";
import { Icon } from "@iconify/vue";
import notificationsIcon from "@iconify-icons/material-symbols/notifications";
import checkboxMarked from "@iconify-icons/mdi/checkbox-marked";
import Badge from "primevue/badge";
import Button from "primevue/button";
</script>

<style scoped>
.dropdown-wrapper {
  display: flex;
  justify-items: start;
  align-items: start;
}
</style>
