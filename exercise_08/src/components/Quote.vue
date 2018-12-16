<template>
    <div class="col-md-2 quote" style="cursor: pointer"
         @click="deleteQuote(quote)">
        {{quote.content}}
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
    div {
        color: black;
        border: 1px solid red;
        font-family: Baghdad;
        margin: 20px auto;
    }

</style>