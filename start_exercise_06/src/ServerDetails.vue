<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server {{ server.id }} selected Status {{server.status}}</p>
    </div>
</template>

<script>
    import {eventBus} from "./main";

    export default {
        name: "ServerDetails",
        data: function () {
            return {
                server: null
            }
        },
        created() {
            eventBus.$on('serverSelected', (server) => {
                console.log('Server event' + server.id);
                this.server = server;//`Server ${server.id} selected`;
            })
        }
    }
</script>

<style scoped>

</style>