<template>
    <div>
        <div v-if="subject">
            <div class="center-align">
                <h2> {{ subject.name }} </h2>
                <h5>{{ subject.description }}</h5>
            </div>
        </div>
    
        <add-note v-bind:subject="subject" v-bind:notes="notes" v-on:update-subjects="updateSubjectsNotes()">
        </add-note>
    
        <show-notes v-bind:subject="subject" v-bind:notes="notes" v-on:update-subjects="updateSubjectsNotes()">
        </show-notes>
    </div>
</template>

<script>
import AddNote from '@/components/AddNote.vue';
import ShowNotes from '@/components/ShowNotes.vue';

export default {
    name: 'subject-page',
    props: ['subjects', 'notes', 'id'],
    components: {
        'show-notes': ShowNotes,
        'add-note': AddNote,
    },
    data: function() {
        return {};
    },
    computed: {
        subject() {
            return this.subjects.filter((subject) => {
                return subject.id == this.id;
            }, this.id)[0];
        }
    },
    methods: {
        updateSubjectsNotes() {
            this.$emit('update-subjects');
        },
    }
}
</script>

<style>

</style>