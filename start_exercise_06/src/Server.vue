<template>
    <li
            class="list-group-item"
            v-for="server in servers">
        Server #{{ server.id }} <span
            :class="{normal: server.status === 'Normal', critical: server.status === 'Critical' }">Status: {{server.status}}</span>
    </li>
</template>

<script>
    export default {
        props: {
            servers:{
                type: Array
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
</style>