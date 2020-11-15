<template>
    <div>
        <div v-if="updateNote.favorite == 0">
            <button @click="toggleFavorite">Add to favorites</button>
        </div>
        <div v-else>
            <button @click="toggleFavorite">Remove from favorites</button>
        </div>

        <ul style="list-style-type:none; color:red;">
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
    data: function() {
        return {
            updateNote: Vue.util.extend({}, this.note),
            errors: null,
        };
    },
    methods: {
        toggleFavorite() {
            // set updateNote to newest note in case it was edited
            this.updateNote = Vue.util.extend({}, this.note);
            
            // check and change favorite status
            if (this.updateNote.favorite == 0) {
                this.updateNote.favorite = 1;
            } else {
                this.updateNote.favorite = 0;
            }
            
            // update in API
            axios.put('/notes/' + this.note.id, this.updateNote).then((response) => {
              if (response.data.errors) {
                  this.errors = response.data.errors;
                  console.log(response.data);
              } else {
                  this.$emit('update-subjects');
              }
            });
        },
    }
}
</script>

<style>

</style>