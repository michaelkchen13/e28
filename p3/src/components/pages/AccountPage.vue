<template>
    <div id="account-page" v-cloak>
        <div class="center-align" v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>
    
            <button @click="logout" data-test="logout-button">Logout</button>
        </div>
    
        <div v-else id="loginForm">
            <div v-if="loggingIn">
                <h2 class="center-align">Login</h2>
                <div>
                    <label>Email:
                        <input
                            type="text"
                            data-test="email-input"
                            v-model="data.email"
                            v-on:blur="validateLogin()"
                        /></label>
                    <error-field v-if="errors && 'email' in errors" :errors="errors.email" class="error"></error-field>
                </div>
                <div>
                    <label>Password:
                        <input
                            type="password"
                            data-test="password-input"
                            v-model="data.password"
                            v-on:blur="validateLogin()"
                        /></label>
                    <error-field v-if="errors && 'password' in errors" :errors="errors.password" class="error"></error-field>
                </div>
    
                <div class="center-align">
                    <button @click="login" data-test="login-button">Login</button>
                </div>
    
                <ul v-if="loginError">
                    <li class="error" v-for="(error, index) in loginError" :key="index">
                        {{ error }}
                    </li>
                </ul>
    
                <div class="center-align">
                    <p>Don't have an account?</p>
                    <button v-on:click="registerLoginToggle" data-test="register-toggle-btn">Create new account</button>
                </div>
            </div>
    
            <div v-else>
                <div id="registerForm">
                    <h2 class="center-align">Register</h2>
                    <div>
                        <label>Name:
                            <input
                                type="text"
                                data-test="name-register-input"
                                v-model="data.name"
                                v-on:blur="validateRegister()"
                            /></label>
                        <error-field v-if="errors && 'name' in errors" :errors="errors.name" class="error"></error-field>
                    </div>
                    <div>
                        <label>Email:
                            <input
                                type="text"
                                data-test="email-register-input"
                                v-model="data.email"
                                v-on:blur="validateRegister()"
                            /></label>
                        <error-field v-if="errors && 'email' in errors" :errors="errors.email" class="error"></error-field>
                    </div>
                    <div>
                        <label>Password:
                            <input
                                type="password"
                                data-test="password-register-input"
                                v-model="data.password"
                                v-on:blur="validateRegister()"
                            /></label>
                        <error-field v-if="errors && 'password' in errors" :errors="errors.password" class="error"></error-field>
                    </div>
    
                    <div class="center-align">
                        <button @click="register" data-test="register-button">Register</button>
                    </div>
    
                    <ul v-if="registerError">
                        <li class="error" v-for="(error, index) in registerError" :key="index">
                            {{ error }}
                        </li>
                    </ul>
    
                    <div class="center-align">
                        <p>Already have an account?</p>
                        <button v-on:click="registerLoginToggle" data-test="login-toggle-btn">Login with existing account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import Validator from 'validatorjs';
import ErrorField from '@/components/ErrorField.vue';

export default {
    components: {
        'error-field': ErrorField,
    },
    data() {
        return {
            data: {
                email: '',
                password: '',
                name: '',
            },
            errors: null,
            registerError: null,
            loginError: null,
            favorites: [],
            loggingIn: true,
        };
    },
    computed: {
        // Get our user from the Vuex store
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        registerLoginToggle() {
            if (this.loggingIn == true) {
                this.loggingIn = false;
            } else {
                this.loggingIn = true;
            }
        },
        validateLogin() {
            let validator = new Validator(this.data, {
                email: 'required|email',
                password: 'required|min:8',
            });

            this.errors = validator.errors.all();
            this.registerError = null;
            this.loginError = null;

            return validator.passes();
        },
        validateRegister() {
            let validator = new Validator(this.data, {
                name: 'required',
                email: 'required|email',
                password: 'required|min:8',
            });

            this.errors = validator.errors.all();
            this.registerError = null;
            this.loginError = null;

            return validator.passes();
        },
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.loginError = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
        register() {
            axios.post('register', this.data).then((response) => {
                if (response.data.errors) {
                    this.registerError = response.data.errors;
                    console.log(response.data);
                } else {
                    this.registerEmail = this.email
                    this.registerPass = this.password
                    this.login()
                }
            });
        },
    },
};
</script>