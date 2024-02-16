<template>
  <div class="container">
    <div class="flex items-center gap-1">
      <NuxtLink to="/"><img class="flex" src="/icons/back.svg" alt="Voltar" /></NuxtLink>
      <h1>Detalhe do funcionário</h1>
    </div>
    <div class="flex items-center justify-center gap-2">
      <div class="employee__card">
        <div class="flex flex-column gap-1">
          <EmployeeBox :employee="employeeData">
            <template v-slot:before>
              <span class="employee__img" v-if="employeeData.photo">
                <img :src="employeeData.photo" />
              </span>
              <span class="employee__description">{{ employeeData.description }}</span>
            </template>
          </EmployeeBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmployeeBox from "../../components/Employees/EmployeeBox.vue";
import { useEmployeesStore } from "../../stores/employees";
import { useRouter } from "vue-router";

const route = useRouter();
const employeeId: string = String(route.currentRoute.value.params.id);
const employeeStore = useEmployeesStore();

let employeeData = ref();
employeeData.value = employeeStore.getById(employeeId);
</script>

<style scoped>
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
.employee__description {
  font-size: 14px;
  color: #595589;
}
</style>
