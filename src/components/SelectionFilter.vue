<script>

import { store } from '../store';

export default {
    name: "SelectionFilter",
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <span class="filter">

        <label for="difficulty">Select category:</label>
        <select name="categories" id="categories" v-model="store.selected" @change="$emit('searchCharacter')">
            <option :value="store.firstOption">Breaking Bad</option>
            <option :value="store.secondOption">Better call Saul</option>
        </select>

    </span>



</template>