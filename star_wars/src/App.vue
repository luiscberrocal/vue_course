<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>People</h2>
    <div>
 <star-wars-person v-for="person in peopleInfo.results" :person="person"></star-wars-person>
    </div>
    <div>{{ peopleInfo }}</div>
  </div>
</template>

<script>
  import Person from './components/Person.vue'
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Star Wars API',
        peopleInfo: 'Crazy'
      }
    },
    mounted() {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => (this.peopleInfo = response.data))
    },
    components:{
      starWarsPerson: Person

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
