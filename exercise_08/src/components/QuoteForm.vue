<template>
    <section class="row">
        <div class="row">
            <textarea name="newQuout" id="" cols="100" rows="5" v-model="newQuote"></textarea>
        </div>
        <button class="btn btn-primary" @click="addQuote">Add</button>
    </section>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        data() {
            return {
                newQuote: ''
            }
        },
        methods: {
            addQuote() {
                //console.log(this.newQuote);
                if (this.newQuote != '') {
                    eventBus.$emit('addQuote', this.newQuote);
                    this.newQuote = '';
                }
            }
        },
        name: "QuoteForm"
    }
</script>

<style scoped>

</style>