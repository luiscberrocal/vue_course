<template>
    <div class="row">
        <div class="col-md-12">
            <h3>Quotes</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                     :style="{width: (quoteCount/10)*100 + '%'}">
                    {{ quoteCount}} / 10
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props: {
            quoteCount: {
                type: Number,
                required: true,
                default: 1
            }
        },
        name: "ProgressBar"
    }
</script>

<style scoped>
    /* .progress-bar {
         width: 80%;
         height: 40px;
         background-color: #eee;
         margin: auto;
         transition: width 500ms;
     }*/
</style>