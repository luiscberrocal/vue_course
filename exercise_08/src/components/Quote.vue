<template>
    <div class="col-md-2" style="cursor: pointer" @click="deleteQuote(quote)">
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
        border: 1px blue;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

</style>