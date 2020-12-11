<template>
    <div id="account-page" v-cloak>
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="data.email"
                /></label>
            </div>
            <div>
                <label
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                /></label>
            </div>

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>

            <div id="registerForm">
                <h2>Register</h2>
                <div>
                    <label
                        >Name:
                        <input
                            type="text"
                            data-test="name-register-input"
                            v-model="data.name"
                    /></label>
                </div>
                <div>
                    <label
                        >Email:
                        <input
                            type="text"
                            data-test="email-register-input"
                            v-model="data.email"
                    /></label>
                </div>
                <div>
                    <label
                        >Password:
                        <input
                            type="password"
                            data-test="password-register-input"
                            v-model="data.password"
                    /></label>
                </div>

                <button @click="register" data-test="register-button">Register</button>

                <ul v-if="errors">
                    <li class="error" v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    data() {
        return {
            data: {
                email: 'michaelkchen13@gmail.com',
                password: '12345678',
                name: '',
            },
            errors: null,
            favorites: [],
        };
    },
    computed: {
        // Get our user and products state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
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
                    this.errors = response.data.errors;
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