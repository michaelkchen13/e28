<template>
    <div>
        <div class="container" v-for="subject in subjects.slice().reverse()" :key="subject.id">
            <div class="subjects" data-test="subject">
                <router-link class="subjectTitle" data-test="subjects-title" v-bind:to="'/subject/' + subject.id" exact>
                    {{ subject.name }}
                </router-link>
                <div class="subjectDescription">
                    {{ subject.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'show-subjects',
    props: ['subjects', 'notes'],
    data: function() {
        return {}
    },
}
</script>

<style>

</style>