<template>
    <div v-cloak>
        <h2 class="center-align">Favorite Notes</h2>
    
        <div v-for="note in notes.slice().reverse()" :key="note.id">
            <div v-if="note.favorite == 1">
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
</template>

<script>
export default {
    name: 'favorites-page',
    props: ['subjects', 'notes'],
    components: {},
    data: function() {
        return {};
    },
}
</script>

<style>

</style>