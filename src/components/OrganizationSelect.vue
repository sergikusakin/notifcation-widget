<template>
  <f-dropdown
    :distance="1"
    placement="right-start"
    :disabled="sm"
    popperClass="abrakadabra"
  >
    <!-- This will be the popover reference (for the events and position) -->
    <pv-button class="flex justify-center" @click="toggleFullscreen">
      <img
        class="flex rounded-full h-10 w-10 object-contain"
        src="../assets/img/KUSAKINS-favicon.png"
        alt="#"
      />
    </pv-button>

    <pv-sidebar
      v-model:visible="visible"
      header="Organization list"
      position="full"
      :modal="true"
    >
      <OrganizationList
        v-model:search="searchKeywords"
        @create="handleCreate"
        :organizations="filterOrganization"
        @select="handleSelect"
      />
    </pv-sidebar>

    <!-- This will be the content of the popover -->
    <template #popper>
      <OrganizationList
        v-model:search="searchKeywords"
        @create="handleCreate"
        :organizations="filterOrganization"
        @select="handleSelect"
      />
    </template>
  </f-dropdown>
</template>

<script setup lang="ts">
import { Dropdown as FDropdown } from "floating-vue";

import PvButton from "primevue/button";
import PvSidebar from "primevue/sidebar";
import OrganizationList, {
  type OrganizationOption,
} from "./OrganizationList.vue";

import { computed, ref, watch } from "vue";

// #region Layout

const visible = ref(false);

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smallerOrEqual("sm");
watch(sm, (val) => {
  if (val === false) {
    visible.value = false;
  }
});

const toggleFullscreen = () => {
  if (sm.value) {
    visible.value = true;
  }
};

// #endregion Layout

//#region Content

const organizations = ref<OrganizationOption[]>([
  {
    id: "1",
    name: "Organization 1",
  },
  {
    id: "2",
    name: "Organization 2",
    imageUrl: "/images/KUSAKINS-favicon.png",
  },
]);

//#endregion Content

// #region Create

const handleCreate = () => {
  console.log("create organization");
};

// #endregion Create

//#region Select

const handleSelect = (option: OrganizationOption) => {
  alert("This is " + option.name + " ID " + option.id);
};

//#endregion Select

// #region Search

const searchKeywords = ref("");

// const handleSearch = () => {
//   console.log(`search by keywords: ${searchKeywords.value}`);
// };

// watch(searchKeywords, handleSearch);

const filterOrganization = computed(() => {
  return organizations.value.filter((organization) =>
    organization.name.includes(searchKeywords.value)
  );
});
</script>

<style>
.abrakadabra .v-popper__inner {
  overflow-x: hidden;
}
</style>
