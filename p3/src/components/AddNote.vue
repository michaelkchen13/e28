<template>
    <div>
        <div v-if="subject" class="container notes">
            <h3 class="center-align" data-test="note-toggle-btn" id="newNoteToggle" @click="addnoteToggle">Add New Note</h3>
    
            <div v-if="addnoteActive">
                <label for="title">Title<span style="color:red;">*</span><input data-test="title-input" type="text" v-model="newNote.title" id="title" v-on:blur="validate()" /></label>
                <error-field v-if="errors && 'title' in errors" :errors="errors.title" class="error"></error-field>

                <label for="subject">Subject<span style="color:red;">*</span><input type="text" v-model="subject.name" id="subject" v-on:blur="validate()" disabled></label>
                <error-field v-if="errors && 'subject' in errors" :errors="errors.subject" class="error"></error-field>

                <label for="description">Description<span style="color:red;">*</span><textarea data-test="description-input" type="textarea" v-model="newNote.description" id="description" v-on:blur="validate()"></textarea></label>
                <error-field v-if="errors && 'description' in errors" :errors="errors.description" class="error"></error-field>

                <div class="center-align">
                    <button data-test="add-note-btn" @click="addNote">Add Note</button>
                    <ul style="list-style-type:none; color:red;">
                        <li v-for="error in submitErrors" :key="error[0]">
                            {{ error[0] }}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="center-align" v-if="noteAdded">
                <h5 style="color:green;">Note Added!</h5>
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
    name: 'add-note',
    props: ['subject', 'notes', 'id'],
    data() {
        return {
            newNote: {
                title: '',
                subject: '',
                description: '',
                favorite: '0'
            },
            noteAdded: "",
            errors: null,
            submitErrors: null,
            addnoteActive: false,
        };
    },
    methods: {
        // toggles the add note section
        addnoteToggle() {
            this.noteAdded = false;
            this.errors = null;
            if (this.addnoteActive == false) {
                this.addnoteActive = true;
            } else {
                this.addnoteActive = false;
            }
        },
        validate() {
            let validator = new Validator(this.newNote, {
                title: 'required|between:1,100',
                description: 'required',
            });

            this.errors = validator.errors.all();
            this.submitErrors = null;

            return validator.passes();
        },
        // adds note to server
        addNote() {
            this.newNote.subject = this.subject.name
            axios.post('/notes', this.newNote).then((response) => {
                if (response.data.errors) {
                    this.submitErrors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.$emit('update-subjects');
                    this.newNote = {}
                    this.addnoteToggle()
                    this.noteAdded = true;
                }
            });
        },
    },
}
</script>

<style>

</style>