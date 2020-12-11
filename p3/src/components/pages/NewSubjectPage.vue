<template>
    <div v-cloak>
        <h2 class="center-align">Add New Subject</h2>
    
        <label for="title">Name<span style="color:red;">*</span><input type="text" data-test="subject-name-input" v-model="newSubject.name" id="title" /></label>
        <label for="description">Description<span style="color:red;">*</span><textarea data-test="subject-description-input" type="textarea" v-model="newSubject.description" id="description"></textarea></label>
        <div class="center-align">
            <button @click="addSubject" data-test="subject-add-btn">Add Note</button>
            <ul style="list-style-type:none; color:red;">
                <li v-for="error in errors" :key="error[0]">
                    {{ error[0] }}
                </li>
            </ul>
        </div>
    
        <div class="center-align" v-if="subjectAdded">
            <h5 style="color:green;">New Subject Added!</h5>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    props: ['subject'],
    components: {},
    data: function() {
        return {
            newSubject: {
                name: '',
                description: '',
            },
            subjectAdded: "",
            errors: null,
        };
    },
    watch: {
        newSubject: {
            handler() {
                this.$store.commit('setNewSubName', this.newSubject.name);
                this.$store.commit('setNewSubDesc', this.newSubject.description);
            },
            deep: true,
        }
    },
    methods: {
        addSubject() {
            this.subjectAdded = false;

            // push updates to api
            axios.post('/subject', this.newSubject).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.$emit('update-subjects');
                    this.subjectAdded = true;
                    this.newSubject = {};
                    this.errors = null;
                }
            });
        },
    },
    mounted() {
        this.newSubject.name = this.$store.state.newSubName;
        this.newSubject.description = this.$store.state.newSubDesc;
    }
}
</script>

<style>

</style>