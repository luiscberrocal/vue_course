<template>
    <li
            class="list-group-item"
            @click="changeServer(server)"
            style="cursor:pointer"
            >
        Server #{{ server.id }} <span
            :class="{normal: server.status === 'Normal', critical: server.status === 'Critical', unknown: server.status === 'Unknown' }">
        Status: {{server.status}}</span>
    </li>
</template>

<script>
    import {eventBus} from "./main";

    export default {
        props: {
            server:{
                type: Object
            }
        },
        methods:{
            changeServer: function (server) {
                //alert('Server ' + server.id);
                eventBus.$emit('serverSelected', server);
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