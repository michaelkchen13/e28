<template>
    <div v-cloak>
        <h2 class="center-align">Favorite Notes</h2>
    
        <div v-if="favorites.length > 0">
            <div v-for="note in notes.slice().reverse()" :key="note.id">
                <div v-for="favorite in favorites" :key="favorite.id">
                    <div v-if="note.id == favorite.note_id">
                        <div class="container">
                            <div class="notes">
                                <h5>{{ note.title }}</h5>
                                <pre>{{ note.description }}</pre>
    
                                <div class="timeInfo">
                                    Created on: {{ note.created_at | moment("MMMM Do YYYY, h:mm:ss a") }}<br> Last Edited on: {{ note.updated_at | moment("MMMM Do YYYY, h:mm:ss a") }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center-align" v-else>
            <p>No favorites :(</p>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'favorites-page',
    props: ['subjects', 'notes'],
    components: {},
    data: function() {
        return {
            favorites: '',
        };
    },
    mounted() {
        // get favorite notes
        axios.get('/notefavorite').then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
                console.log(response.data);
            } else {
                this.favorites = response.data.notefavorite;
            }
        });
    },
}
</script>

<style>

</style>