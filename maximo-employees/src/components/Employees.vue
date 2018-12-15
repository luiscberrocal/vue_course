<template>
  <div>
    <div v-for="employee, index in employees"
            @click="unselectEmployee(index)"
            v-bind:id="index">{{ employee.username}} {{index}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      employees: {
        type: Array,
        required: true
      }
    },
    methods: {
      unselectEmployee(index) {
        //this.unselectedEmployees.unshift(this.employees[index]);
        this.$delete(this.employees, index);
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
