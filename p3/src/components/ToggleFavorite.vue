<template>
    <div>
        <div v-if="isFavorite">
            <button data-test="remove-favorite" @click="removeFavorite">Remove from favorites</button>
        </div>
        <div v-else>
            <button data-test="add-favorite" @click="addFavorite">Add to favorites</button>
        </div>
    
        <ul class="error">
            <li v-for="error in errors" :key="error[0]">
                {{ error[0] }}
            </li>
        </ul>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import Vue from 'vue';

export default {
    name: 'toggle-favorite',
    props: ['note'],
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    data: function() {
        return {
            updateNote: Vue.util.extend({}, this.note),
            errors: null,
            favorites: '',
            favoriteID: '',
            isFavorite: null,
        };
    },
    methods: {
        favoriteStatus() {
            axios.get('/notefavorite').then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.favorites = response.data.notefavorite;
                    // check if note is on users favorite list
                    for (var i in this.favorites) {
                        if (this.favorites[i].note_id == this.note.id) {
                            if (this.favorites[i].user_id == this.user.id) {
                                this.favoriteID = this.favorites[i].id;
                                this.isFavorite = true;
                            }
                        }
                    }
                }
            });
        },
        addFavorite() {
            var noteFave = { note_id: this.note.id }
            axios.post('/notefavorite', noteFave).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.isFavorite = true;
                    this.favoriteStatus()
                }
            });
        },
        removeFavorite() {
            axios.delete('/notefavorite/' + this.favoriteID).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.isFavorite = false;
                    this.favoriteStatus()
                }
            });
        },
    },
    mounted() {
        this.favoriteStatus();
    },
}
</script>

<style>

</style>