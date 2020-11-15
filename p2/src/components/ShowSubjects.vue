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