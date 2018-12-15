<template>
  <div>
    <div v-for="employee, index in selectedEmployees"
         @click="unselectEmployee(index)"
         v-bind:id="'employee-' + index"
         :class="employee">{{ employee.username}} {{index}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selectedEmployees: {
        type: Array,
        required: true
      }
    },
    methods: {
      unselectEmployee(index) {
        //this.unselectedEmployees.unshift(this.employees[index]);
        this.$delete(this.selectedEmployees, index);
      },
    },
    name: "Employees"
  }
</script>

<style scoped>
  .employee {
    border: 1px red;
  }
</style>
