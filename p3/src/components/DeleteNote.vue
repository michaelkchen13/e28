<template>
    <div>
        <button data-test="delete-note" @click="deleteNote">Delete</button>
    
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
    name: 'delete-note',
    props: ['note'],
    data: function() {
        return {
            updateNote: Vue.util.extend({}, this.note),
            errors: null,
        };
    },
    methods: {
        deleteNote() {
            // update in api
            axios.delete('/notes/' + this.note.id, this.updateNote).then((response) => {
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