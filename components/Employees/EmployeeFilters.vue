<template>
  <div>
    <div>
      <label for="userInput">Busque pelo nome ou cargo funcionário</label>
      <input class="input__search" type="search" name="userInput" placeholder="Exemplo: Frontend" v-model="searchString" :style="{ backgroundImage: `url(../icons/search.svg)` }" />
    </div>
  </div>
  <div>
    <label for="userInput">Filtre pelo cargo</label>
    <div class="flex gap-1 flex-wrap">
      <div class="role__item flex items-center pointer" v-for="(role, $r) in roleTags" :key="$r">
        <a href.prevent="#" @click="clickRole(String(role.roleName))">{{ role.roleName }}</a>
        <span class="flex items-center pointer" v-if="roleSelected === role.roleName" @click="clickClearRole"><img src="/icons/close.svg" alt="Remover" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineEmits } from "vue";
const emit = defineEmits(["setRole", "clearRole"]);

function clickRole(roleName: string) {
  emit("setRole", roleName);
}

function clickClearRole() {
  emit("clearRole");
}

const searchString = defineModel<string>();

const props = defineProps({
  roleTags: {
    required: true,
    type: Array as PropType<{ id: string | number; roleName: string | number; selected: boolean }[]>,
  },
  roleSelected: {
    required: false,
    type: String,
  },
  searchString: {
    required: false,
    type: String,
  },
});
</script>
<style scoped>
.role__item {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 6px;
  padding: 4px 8px;
  transition: all 0.3s ease-in-out;
}
.role__item:hover {
  color: var(--secondary-color);
}
</style>
