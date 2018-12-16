<template>
    <div class="container">
        <form v-if="!formSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No
                    v-model="userData.fullName"
                    v-model="userData.email"
                     v-model="userData.password"
                     v-model="userData.storeData"
                      v-model="userData.storeData"
                    -->
                    <full-name v-model="userData.fullName"></full-name>
                    <div class="form-group">
                        <label for="full-name">Full Name</label>
                        <input
                                type="text"
                                id="full-name"
                                class="form-control"
                                v-model="userData.fullName"
                        >
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password"
                        >
                    </div>
                    <div class="row">
                        <h3>Store Data?</h3>
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="yes">
                                <input
                                        type="radio"
                                        id="yes"
                                        value="Yes"
                                        v-model="userData.storeData"
                                > Yes
                            </label>
                            <label for="no">
                                <input
                                        type="radio"
                                        id="no"
                                        value="No"
                                        v-model="userData.storeData"
                                > No
                            </label>
                        </div>
                    </div>
<div class="form-group">
    <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
</div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="formSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.fullName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}} </p>
                        <p>Store in Database?: {{userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: '',
                    storeData: 'No'
                },
                formSubmitted: false
            }
        },
        methods: {
            submitForm() {
                this.formSubmitted = true;
            }
        },
        components:{
            fullName: FullName
        }
    }
</script>

<style>
</style>
