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

    <div class="row row-cols-5">
        <SingleCharacter :character="character" v-for="character in store.characters" />
    </div>

</template>