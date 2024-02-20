<template>
  <div v-if="employeesLength > 0"> Encontramos {{ employeesLength }} resultado<span v-if="employeesLength > 1">s</span> </div>
  <div v-if="employeesLength === 0">
    <ul>
      <span>Não há funcionários que correspondam à sua busca. Por favor, tente o seguinte: </span>
      <li><u>Revise a ortografia da palavra.</u></li>
      <li><u>Utilize palavras mais genéricas ou menos palavras.</u></li>
      <li><u>Limpe os filtros selecionados.</u></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  employeesLength: number;
}>();
</script>
