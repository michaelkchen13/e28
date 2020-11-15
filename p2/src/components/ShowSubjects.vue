<template>
  <div>
    <div class="container" v-for="subject in subjects.slice().reverse()" :key="subject.id">
        <div class="subjects">
            <router-link v-bind:to="'/' + subject.id" exact>
                <h4>{{ subject.name }}</h4>
            </router-link>
            <div>
            {{ subject.description }}
            </div>
        </div>
        <!-- <div class="notes" v-for="note in notes.slice().reverse()" :key="note.id">
            <div v-if="note.subject == subject.name && counter < 2">
                <h5>{{ note.title }}</h5>
                <pre>{{ note.description }}</pre>
                {{ counter = counter + 1 }}
                <br>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'show-subjects',
    props: ['subjects', 'notes'],
    data: function () {
        return {}
    },
}
</script>

<style>

</style>