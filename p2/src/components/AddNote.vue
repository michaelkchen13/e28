<template>
    <div>
        <div v-if="subject" class="container notes">
            <h3 class="center-align" id="newNoteToggle" @click="addnoteToggle">Add New Note</h3>
    
            <div v-if="addnoteActive">
                <label for="title">Title<span style="color:red;">*</span><input type="text" v-model="newNote.title" id="title" /></label>
                <label for="subject">Subject<span style="color:red;">*</span><input type="text" v-model="subject.name" id="subject" disabled></label>
                <label for="description">Description<span style="color:red;">*</span><textarea type="textarea" v-model="newNote.description" id="description"></textarea></label>
                <div class="center-align">
                    <button @click="addNote">Add Note</button>
                    <ul style="list-style-type:none; color:red;">
                        <li v-for="error in errors" :key="error[0]">
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

export default {
    name: 'add-note',
    props: ['subject', 'notes', 'id'],
    data() {
        return {
            newNote: {
                title: '',
                subject: '',
                description: '',
            },
            noteAdded: "",
            errors: null,
            addnoteActive: false,
        };
    },
    methods: {
        addnoteToggle() {
            this.noteAdded = false;
            this.errors = null;
            if (this.addnoteActive == false) {
                this.addnoteActive = true;
            } else {
                this.addnoteActive = false;
            }
        },
        addNote() {
            this.newNote.subject = this.subject.name
            axios.post('/notes', this.newNote).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
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