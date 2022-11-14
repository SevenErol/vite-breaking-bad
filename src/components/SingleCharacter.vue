<script>

export default {
    name: "SingleCharacter",
    props: {
        character: Object
    }
}

</script>

<template>

    <div class="col">
        <img :src="character.src" :alt="character.name">
        <h5>{{ character.name }}</h5>
        <p>{{ character.info }}</p>
    </div>



</template>