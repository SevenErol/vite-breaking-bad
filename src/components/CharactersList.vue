<script>

import SingleCharacter from "./SingleCharacter.vue"

import { store } from '../store.js'

export default {
    name: "CharactersList",
    components: {
        SingleCharacter
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="results" v-if="store.characters !== null">
        <p>Found {{ store.characters.length }} characters </p>
    </div>

    <div class="row row-cols-5">
        <SingleCharacter :character="character" v-for="character in store.characters" />
    </div>

</template>