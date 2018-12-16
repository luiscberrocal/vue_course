<template>
    <div class="form-group">
        <div class="col-xs-6">
            <label for="first-name">First Name</label>
            <input
                    type="text"
                    id="first-name"
                    class="form-control"
                    v-model="firstName"
                    @input="input"
            >
        </div>
        <div class="col-xs-6">
            <label for="last-name">Last Name</label>
            <input
                    type="text"
                    id="last-name"
                    class="form-control"
                    v-model="lastName"
                    @input="input"
            >
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            fullName: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                firstName: '',
                lastName: ''
            }
        },
        methods: {
            input() {
                this.$emit('input', `${this.firstName} ${this.lastName}`);
            }
        },
        name: "FullName"
    }
</script>

<style scoped>

</style>