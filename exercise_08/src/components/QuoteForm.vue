<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3 form-group">
            <label for="q">Quote</label>
            <textarea name="newQuout" id="q" rows="3" v-model="newQuote" class="form-control"></textarea>
        </div>
        <div class="col-md-6 col-md-offset-3 form-group">
            <button class="btn btn-primary" @click="addQuote">Add</button>
        </div>
    </div>
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