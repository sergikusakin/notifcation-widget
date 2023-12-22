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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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

        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <div class="pt-1 border-b-2 border-blue-900">
          <!-- text and avatar of notification -->
          <div class="flex p-2 h-auto w-auto">
            <div class="rounded-full w-10 h-10 bg-yellow-500"></div>
            <div class="pl-3">
              <p class="text-xs text-gray-400">15/12/2023 18:16</p>
              <p class="h-auto w-64 text-sm">
                Nofitication description and some additional information...
              </p>
            </div>
          </div>
          <!-- btns actions -->
          <div class="p-2 h-12 flex justify-between">
            <div class="flex justify-center">
              <Button
                class="bg-sky-300 p-1 mr-3 text-sm"
                type="button"
                label="Action"
                severity="info"
              />
              <Button
                class="bg-violet-400 p-1 text-sm"
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
        <!-- control -->
        <div class="flex justify-between pt-1">
          <Button>
            <template #icon
              ><Icon class="h-10 w-10" :icon="bellOff" :horizontalFlip="true"
            /></template>
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
</script>

<style scoped>
.dropdown-wrapper {
  display: flex;
  justify-items: start;
  align-items: start;
}
</style>
