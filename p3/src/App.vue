<template>
    <div id="app" v-cloak>
        <header>
            <router-link id="titleLogo" v-bind:to="'/'" exact>
                Collaborative Notes
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link v-for="link in links" v-bind:key="link" v-bind:to="paths[link]" :data-test="link + '-link'" exact>{{ link }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </header>
    
        <router-view v-bind:subjects="subjects" v-bind:notes="notes" v-on:update-subjects="updateSubjectsNotes()">
        </router-view>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'App',
    data() {
        return {
            subjects: [],
            notes: [],

            // Links for main nav
            links: ['Home', 'Favorites', 'Add a Subject', 'Account'],
            // page paths
            paths: {
                Home: '/',
                Favorites: '/favorites',
                'Add a Subject': '/new',
                'Account': '/account',
            },
        };
    },
    components: {},
    methods: {
        // get latest notes and subjects from api
        updateSubjectsNotes() {
            axios.get('subject').then((response) => {
                this.subjects = response.data.subject;
            })
            axios.get('notes').then((response) => {
                this.notes = response.data.notes;
            })
        }
    },
    mounted() {
        this.updateSubjectsNotes();
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/p3.scss';
</style>
