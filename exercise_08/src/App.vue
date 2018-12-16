<template>

    <div class="container">
        <h1>Quotes</h1>
        <progress-bar></progress-bar>
        <hr>
        <quote-form></quote-form>
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue'
    import QuoteForm from './components/QuoteForm.vue'

    export default {
        components: {
            progressBar: ProgressBar,
            quoteForm: QuoteForm,
        }

    }
</script>

<style>
</style>
