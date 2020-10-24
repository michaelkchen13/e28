<template>
    <div class="results" v-if='gameplayed' v-bind:class="{ win : playerwin }">
        <div v-if='playerwin == true'>
            <p>You got it! Nice work!!! <button v-on:click='$emit("play-again")'>Play again</button></p>
        </div>
        <div v-else-if='playerwin == false'>
            <p>Not correct. Please try again.</p>
        </div>
    </div>
</template>


<script>
export default {
    data: function () {
        return {

        }
    },
    props: {
        gameplayed: Boolean,
        playerwin: Boolean,
        playagain: Function,
    },
    template: `#guess-results`,
    methods: {

    }
}
</script>


<style>
    .win {
        background-color: green !important;
    }

    .results {
        background-color: red;
        color: white;
        font-weight: bold;
    }
</style>