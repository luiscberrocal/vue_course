<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div class="row">
      <h3>Selected</h3>
    </div>
    <div class="row">
      <button v-for="employee, index in employees"
              @click="unselectEmployee(index)"
              v-bind:id="index">{{ employee.username}} {{index}}</button>
    </div>
    <div class="row">
      <h3>UnSelected</h3>
    </div>
     <div class="row">
      <button v-for="employee, index in unselectedEmployees"
              @click="selectEmployee(index)"
              v-bind:id="index">{{ employee.username}} {{index}}</button>
    </div>
    <hr>
    <div>
      {{ sqlQuery }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        employees: [
          {username: 'OAHerrera'},
          {username: 'IMontilla'},
          {username: 'DArdines'},
          {username: 'JoCarrillo'},
          {username: 'MaVeces'},
          {username: 'Gvillarreal'},
        ],
        unselectedEmployees:[]
      }
    },
    computed:{
      sqlQuery: function(){
        var query = 'SELECT ';
        for (var employee in this.employees){
           query += `USERNAME = "${this.employees[employee].username}"`;
           if(employee != this.employees.length - 1){
             query += ' OR '
           }
        };
        return query;

      }
    },
    methods:{
      unselectEmployee(index){
        this.unselectedEmployees.unshift(this.employees[index])
        this.$delete(this.employees, index);
      },
       selectEmployee(index){
        this.employees.unshift(this.unselectedEmployees[index])
        this.$delete(this.unselectedEmployees, index);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
