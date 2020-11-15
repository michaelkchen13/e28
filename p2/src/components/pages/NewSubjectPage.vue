<template>
  <div>
    <h2 class="center-align">Add New Subject</h2>
    
    <label for="title">Name<span style="color:red;">*</span><input type="text" v-model="newSubject.name" id="title" /></label>
    <label for="description">Description<span style="color:red;">*</span><textarea type="textarea" v-model="newSubject.description" id="description"></textarea></label>
    <div class="center-align">
        <button @click="addSubject">Add Note</button>
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
    data: function () {
        return {
          newSubject: {
                name: '',
                description: '',
            },
            subjectAdded: "",
            errors: null,
        };
    },
    methods: {
      addSubject() {
        this.subjectAdded = false;
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
    }
}
</script>

<style>

</style>