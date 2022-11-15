<script>
import { store } from '../store';
import axios from 'axios'

import CharactersList from "./CharactersList.vue"

export default {
    name: "SiteMain",
    components: {
        CharactersList
    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchCharacter() {

            const newUrl = `${this.store.API_URL}?category=${this.store.selected}`

            axios.get(newUrl)
                .then(response => {
                    this.store.characters = response.data
                })

            console.log("qui")
        }
    }
}


</script>

<template>

    <main>

        <div class="container">

            <span class="filter">

                <label for="difficulty">Select category:</label>
                <select name="categories" id="categories" v-model="store.selected" @change="searchCharacter()">
                    <option :value="store.firstOption">Breaking Bad</option>
                    <option :value="store.secondOption">Better call Saul</option>
                </select>

            </span>


            <div class=" characters">
                <CharactersList />
            </div>

        </div>
    </main>



</template>