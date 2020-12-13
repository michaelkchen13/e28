<template>
    <div>
        <button data-test="edit-btn" v-on:click=editTF()>Edit Note</button>
    
        <div v-if="edit">
            <label for="name">Title
                <span style="color:red;">*</span>
                <input data-test="edit-title" type="text" v-model="updateNote.title" v-on:blur="validate()" />
            </label>
            <error-field v-if="errors && 'title' in errors" :errors="errors.title" class="error"></error-field>
    
            <label for="subject">
                Subject<span style="color:red;">*</span> 
                <input type="text" v-model="updateNote.subject" v-on:blur="validate()" disabled>
            </label>
            <error-field v-if="errors && 'subject' in errors" :errors="errors.subject" class="error"></error-field>
    
            <label for="description">Description
                <span style="color:red;">*</span>
                <textarea data-test="edit-description" v-model="updateNote.description" id="description" v-on:blur="validate()"></textarea>
            </label>
            <error-field v-if="errors && 'description' in errors" :errors="errors.description" class="error"></error-field>
    
            <button id="editSaveBtn" data-test="edit-save-btn" v-on:click='editNote();'>Save Changes</button>
    
            <ul class="error">
                <li v-for="error in submitErrors" :key="error[0]">
                    {{ error[0] }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import Vue from 'vue';
import Validator from 'validatorjs';
import ErrorField from '@/components/ErrorField.vue';

export default {
    name: 'edit-note',
    props: ['note'],
    components: {
        'error-field': ErrorField,
    },
    data: function() {
        return {
            updateNote: Vue.util.extend({}, this.note),
            errors: null,
            submitErrors: null,
            edit: false,
        };
    },
    methods: {
        editTF() {
            // change edit status to T or F
            if (this.edit == true) {
                this.edit = false;
            } else {
                this.edit = true;
            }
        },
        validate() {
            let validator = new Validator(this.updateNote, {
                title: 'required|between:1,100',
                description: 'required',
            });

            this.errors = validator.errors.all();
            this.submitErrors = null;

            return validator.passes();
        },
        editNote() {
            // push updates to api
            axios.put('/notes/' + this.updateNote.id, this.updateNote).then((response) => {
                if (response.data.errors) {
                    this.submitErrors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.errors = null;
                    this.edit = false;
                    this.$emit('update-subjects');
                }
            });
        },
    },
}
</script>

<style>

</style>