<script>

export default {
    name: "SingleCharacter",
    props: {
        character: Object
    }
}

</script>

<template>

    <div class="col gy-3">

        <div class="card">

            <img :src="character.img" :alt="character.name">
            <h3>{{ character.name }}</h3>
            <p>{{ character.category }}</p>
            <p class="status">{{ character.status }}</p>

        </div>

    </div>



</template>