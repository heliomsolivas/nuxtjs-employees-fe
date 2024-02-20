<template>
  <div class="container">
    <h1>Lista de funcionários</h1>
    <EmployeeFilters :roleTags="roleTags" :roleSelected="roleSelected" v-model="searchString" @@clear-role="handleClearRole" @@filter-by-role="handleFilterByRole" />
    <EmployeesSearchInfo :employeesLength="filteredEmployees.length" />
    <EmployeeList :employees="filteredEmployees" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { EmployeeObject } from "../types/employee";
import EmployeesSearchInfo from "../components/Employees/EmployeesSearchInfo.vue";
import EmployeeList from "../components/Employees/EmployeeList.vue";
import EmployeeFilters from "@/components/Employees/EmployeeFilters.vue";

const { employees } = useEmployeesStore();

//data
const searchString = ref<string>("");
const roleSelected = ref<string>("");

//events
const handleFilterByRole = (roleName: string) => (roleSelected.value = roleName);
const handleClearRole = () => (roleSelected.value = "");

//methods
function searchByText(array: EmployeeObject[], filter1: string, filter2: string, text: string): EmployeeObject[] {
  const res = array.filter((obj) => {
    const prop1 = obj[filter1]?.toString().toLowerCase() || "";
    const prop2 = obj[filter2]?.toString().toLowerCase() || "";
    return prop1.includes(text.toLowerCase()) || prop2.includes(text.toLowerCase());
  });

  return res;
}

function removeDuplicatedRoles(array: EmployeeObject[], propriedade: string): EmployeeObject[] {
  const conjuntoDePropriedadesVistas = new Set<string>();
  const resultadosFiltrados: EmployeeObject[] = [];

  for (const objeto of array) {
    const valorPropriedade = objeto[propriedade]?.toString();

    if (valorPropriedade && !conjuntoDePropriedadesVistas.has(valorPropriedade)) {
      resultadosFiltrados.push(objeto);
      conjuntoDePropriedadesVistas.add(valorPropriedade);
    }
  }

  return resultadosFiltrados;
}

const filteredEmployees = computed(() => {
  if (roleSelected.value !== "") {
    return searchByText(employees, "name", "role", searchString.value).filter((s) => s.role === roleSelected.value);
  }
  return searchByText(employees, "name", "role", searchString.value);
});

const roleTags = computed(() => {
  return removeDuplicatedRoles(employees, "role").map((s) => ({
    id: s.id,
    roleName: s.role,
    selected: false,
  }));
});
</script>
