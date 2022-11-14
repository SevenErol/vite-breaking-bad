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
            <label for="difficulty">Select categiory:</label>
            <select name="categories" id="categories">
                <option value="">Easy</option>
                <option value="">Regular</option>
                <option value="">Hard</option>
            </select>

            <div class="characters">
                <CharactersList />
            </div>

        </div>
    </main>



</template>