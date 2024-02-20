<template>
  <div class="employee">
    <div v-for="employee in employees" :key="employee.id" class="employee__card">
      <EmployeeBox :employee="employee">
        <template v-slot:after>
          <NuxtLink class="link" :to="`/employees/${employee.id}`">Ver detalhes</NuxtLink>
        </template>
      </EmployeeBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EmployeeObject } from "~/types/employee";
import EmployeeBox from "../components/Employees/EmployeeBox.vue";

defineProps<{
  employees: EmployeeObject[];
}>();
</script>

<style scoped>
.employee {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}
.employee__card {
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 11px 7px rgba(230, 230, 230, 0.27);
  color: var(--primary-color);
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}
</style>
