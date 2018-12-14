<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ server.id }} <span :class="{normal: server.status === 'Normal', critical: server.status === 'Critical' }">Status: {{server.status}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unkonwn'},
                    {id: 4, status: 'Normal'}
                ]
            }
        },
        name: "Servers"
    }
</script>

<style scoped>

</style>