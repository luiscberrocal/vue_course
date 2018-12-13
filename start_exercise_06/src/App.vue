<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
           <server-details></server-details>
        </div>
        <hr>
        <server-footer></server-footer>
    </div>
</template>

<script>
</script>

<style>

</style>
