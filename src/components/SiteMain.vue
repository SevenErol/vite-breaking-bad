<script>

import CharactersList from "./CharactersList.vue"

export default {
    name: "SiteMain",
    components: {
        CharactersList
    }
}


</script>

<template>

    <main>

        <div class="container">
            <label for="difficulty">Select category:</label>
            <select name="categories" id="categories">
                <option value="">Something</option>
                <option value="">Something</option>
                <option value="">Something</option>
            </select>

            <div class="characters">
                <CharactersList />
            </div>

        </div>
    </main>



</template>