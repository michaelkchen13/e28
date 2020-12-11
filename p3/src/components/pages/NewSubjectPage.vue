<template>
    <div v-cloak>
        <h2 class="center-align">Add New Subject</h2>
    
        <label for="title">Name<span style="color:red;">*</span><input type="text" placeholder="min:3 characters max:100 characters" data-test="subject-name-input" v-model="newSubject.name" id="title" v-on:blur="validate()" /></label>
        <error-field v-if="errors && 'name' in errors" :errors="errors.name" class="error"></error-field>
    
        <label for="description">Description<span style="color:red;">*</span><textarea placeholder="min:3 characters" data-test="subject-description-input" type="textarea" v-model="newSubject.description" id="description" v-on:blur="validate()"></textarea></label>
        <error-field v-if="errors && 'description' in errors" :errors="errors.description" class="error"></error-field>
    
        <div class="center-align">
            <button @click="addSubject" data-test="subject-add-btn">Add Note</button>
        </div>
    
        <ul class="error">
            <li v-for="error in submitErrors" :key="error[0]">
                {{ error[0] }}
            </li>
        </ul>
    
        <div class="center-align" v-if="subjectAdded">
            <h5 style="color:green;">New Subject Added!</h5>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import Validator from 'validatorjs';
import ErrorField from '@/components/ErrorField.vue';

export default {
    props: ['subject'],
    components: {
        'error-field': ErrorField,
    },
    data: function() {
        return {
            newSubject: {
                name: '',
                description: '',
            },
            subjectAdded: "",
            errors: {},
            submitErrors: null,
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
        validate() {
            let validator = new Validator(this.newSubject, {
                name: 'required|between:3,100',
                description: 'required|min:3',
            });

            this.errors = validator.errors.all();
            this.submitErrors = null;

            return validator.passes();
        },
        addSubject() {
            this.subjectAdded = false;

            // push updates to api
            axios.post('/subject', this.newSubject).then((response) => {
                if (response.data.errors) {
                    this.submitErrors = response.data.errors;
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