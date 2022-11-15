<script>
import { store } from '../store';
import axios from 'axios'

import CharactersList from "./CharactersList.vue"
import SelectionFilter from "./SelectionFilter.vue";

export default {
    name: "SiteMain",
    components: {
        CharactersList,
        SelectionFilter
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
        }
    }
}


</script>

<template>

    <main>

        <div class="container">

            <SelectionFilter @searchCharacter="searchCharacter()" />
            <div class=" characters">
                <CharactersList />
            </div>

        </div>
    </main>



</template>