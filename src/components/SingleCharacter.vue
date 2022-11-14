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
        <img :src="character.img" :alt="character.name">
        <h5>{{ character.category }}</h5>
        <p>{{ character.status }}</p>
    </div>



</template>