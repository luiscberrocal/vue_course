<template>
  <div>
    <div> Name: {{person.name}}</div>
  </div>
</template>

<script>
  export default {
    name: "Person",
    props: {
      person: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
