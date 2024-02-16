<template>
  <div class="w-100">
    <div class="flex flex-column gap-2">
      <slot name="before"></slot>
    </div>
    <div class="flex space-between items-center w-100">
      <div class="employee__data">
        <span class="employee__name">{{ employee.name }}</span>
        <span class="employee__role">{{ employee.role }}</span>
      </div>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Employee } from "~/types/employee";

const props = defineProps({
  employee: {
    required: true,
    type: Object as PropType<Employee>,
  },
});
</script>
<style scoped>
.employee__data {
  display: flex;
  flex-direction: column;
}
.employee__name {
  font-size: 24px;
}
</style>
