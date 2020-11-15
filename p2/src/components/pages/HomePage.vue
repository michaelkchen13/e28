<template>
    <div>
        <p class="center-align">Which subject notes would you like to look at?</p>

        <show-subjects 
            v-bind:subjects="subjects"
            v-bind:notes="notes">
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
    data: function () {
        return {};
    },
}
</script>

<style>

</style>