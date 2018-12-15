<template>
    <section class="row">
        <div class="small-6 columns">
            <div class="progress-bar">
                <div class="progress-bar text-center" style="background-color: green; margin: 0; color: white;"
                     :style="{width: '100%'}" >
                    1/10
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ProgressBar"
    }
</script>

<style scoped>
    .progress-bar {
        width: 80%;
        height: 40px;
        background-color: #eee;
        margin: auto;
        transition: width 500ms;
    }
</style>