<template>
    <div>
        <slot name="title">Title</slot>
        <div class="row content">
           <slot name="content">Content</slot>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
    .content {
         border: 0px;
        padding: 5px;
        margin: 5px auto;
        text-align: left;
    }
</style>