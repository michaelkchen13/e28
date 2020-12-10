<template>
    <div v-cloak>
        <show-subjects v-bind:subjects="subjects" v-bind:notes="notes">
        </show-subjects>
    </div>
</template>

<script>
import ShowSubjects from '@/components/ShowSubjects.vue';

export default {
    name: '',
    props: ['subjects', 'notes'],
    components: {
        'show-subjects': ShowSubjects
    },
    data: function() {
        return {};
    },
}
</script>

<style>

</style>