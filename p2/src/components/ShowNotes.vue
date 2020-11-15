<template>
    <div>
        <div v-if="subject">
            <div v-for="note in notes.slice().reverse()" :key="note.id">
                <div v-if="note.subject == subject.name">
                    <div class="container">
    
                        <div class="notes">
                            <h5>{{ note.title }}</h5>
                            <pre>{{ note.description }}</pre>
    
                            <div class="timeInfo">
                                Created on: {{ note.created_at | moment("MMMM Do YYYY, h:mm:ss a") }}<br> Last Edited on: {{ note.updated_at | moment("MMMM Do YYYY, h:mm:ss a") }}
                            </div>
    
                            <div class="noteButtons">
                                <edit-note :note='note' v-on:update-subjects="updateSubjectsNotes()">
                                </edit-note>
    
                                <toggle-favorite :note='note' v-on:update-subjects="updateSubjectsNotes()">
                                </toggle-favorite>
    
                                <delete-note :note='note' v-on:update-subjects="updateSubjectsNotes()">
                                </delete-note>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import EditNote from '@/components/EditNote.vue';
import DeleteNote from '@/components/DeleteNote.vue';
import ToggleFavorite from '@/components/ToggleFavorite.vue';

export default {
    name: 'show-notes',
    props: ['subject', 'notes', 'id'],
    components: {
        'edit-note': EditNote,
        'delete-note': DeleteNote,
        'toggle-favorite': ToggleFavorite,
    },
    data: function() {
        return {}
    },
    computed: {},
    methods: {
        updateSubjectsNotes() {
            this.$emit('update-subjects');
        },
    },
}
</script>

<style>

</style>