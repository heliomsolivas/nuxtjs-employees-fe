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
        <a href.prevent="#" @click="handleClickRole(String(role.roleName))">{{ role.roleName }}</a>
        <span class="flex items-center pointer" v-if="roleSelected === role.roleName" @click="handleClearRole"><img src="/icons/close.svg" alt="Remover" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

//events
const emit = defineEmits<{
  (e: "@filterByRole", roleName: string): void;
  (e: "@clearRole"): void;
}>();

const handleClickRole = (roleName: string) => {
  emit("@filterByRole", roleName);
};

const handleClearRole = () => {
  emit("@clearRole");
};

//data
const searchString = defineModel<string>();

//props
defineProps<{
  roleTags: { id: string | number; roleName: string | number; selected: boolean }[];
  roleSelected?: string;
}>();
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
