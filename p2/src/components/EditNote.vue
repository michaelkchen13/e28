<template>
    <div>
        <button v-on:click=editTF()>Edit Note</button>

        <div v-if="edit">
            <label for="name">Title<span style="color:red;">*</span><input type="text" v-model="updateNote.title" /></label>
            <label for="subject">Subject<span style="color:red;">*</span> <input type="text" v-model="updateNote.subject" disabled></label>
            <label for="description">Description<span style="color:red;">*</span><textarea v-model="updateNote.description" id="description"></textarea></label>
            <button id="editSaveBtn" v-on:click='editTF(); editNote();'>Save Changes</button>
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
    name: 'edit-note',
    props: ['note'],
    data: function() {
        return {
            updateNote: Vue.util.extend({}, this.note),
            errors: null,
            edit: false,
        };
    },
    methods: {
        editTF() {
            // change edit status to T or F
            if (this.edit == true) {
                this.edit= false;
            } else {
                this.edit = true;
            }
        },
        editNote() {
            // push updates to api
            axios.put('/notes/' + this.updateNote.id, this.updateNote).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.errors = null;
                    this.$emit('update-subjects');
                }
            });
        },
    },
}
</script>

<style>

</style>