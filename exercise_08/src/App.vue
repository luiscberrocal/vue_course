<template>

    <div class="container">
        <h1>Quotes</h1>
        <progress-bar></progress-bar>
        <hr>
        <quote-form></quote-form>
        <hr>
        <section class="row">
            <quote v-for="quote in quotes" :quote="quote"></quote>
        </section>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue';
    import QuoteForm from './components/QuoteForm.vue';
    import Quote from './components/Quote.vue';
    import {eventBus} from "./main";

    export default {
        data() {
            return {
                quotes: [{id: 1, content: 'My first quoute'}]
            }
        },
        components: {
            progressBar: ProgressBar,
            quoteForm: QuoteForm,
            quote: Quote
        },
        created() {
            eventBus.$on('deleteQuote', (quote) => {
                console.log('Delete event');
                for (let index = 0; index < this.quotes.length; ++index) {
                    if (this.quotes[index].id === quote.id) {
                        this.quotes.splice(index, 1);
                    }
                }
            })
        }

    }
</script>

<style>
</style>
