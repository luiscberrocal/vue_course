<template>
    <li
            class="list-group-item"
            >
        Server #{{ server.id }} <span
            :class="{normal: server.status === 'Normal', critical: server.status === 'Critical', unknown: server.status === 'Unknown' }">
        Status: {{server.status}}</span>
    </li>
</template>

<script>
    export default {
        props: {
            server:{
                type: Object
            }
        },

        name: "Server"
    }
</script>

<style scoped>
 .normal {
        background-color: green;
        color: greenyellow;
        padding: 5px;
    }
    .critical {
        background-color: red;
        color: pink;
        padding: 5px;
    }
     .unknown {
        background-color: gray;
        color: black;
        padding: 5px;
    }
</style>