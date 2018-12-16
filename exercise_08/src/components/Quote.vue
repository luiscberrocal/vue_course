<template>
    <div class="col-md-2"
         @click="deleteQuote(quote)">
        <div class="panel panel-default">
            <div class="panel-body quote">
                 {{quote.content}}
            </div>
        </div>

    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        props: {
            quote: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteQuote(quote) {
                eventBus.$emit('deleteQuote', quote);
            }
        },
        name: "Quote"
    }
</script>

<style scoped>
    .panel-body {
        font-family: Arizonia, cursive;
        font-size: 24px;
        color: #6e6e6e;

    }
    .quote {
       cursor: pointer;

    }
    .quote:hover{
        background-color: #ffc0c1;
    }

</style>