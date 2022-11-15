<script>

export default {
    name: "LoadingMessage",
    props: {
        defaultMessage: String
    }
}

</script>

<template>

    <div class="center_screen">
        <h1>{{ defaultMessage }}</h1>
    </div>


</template>