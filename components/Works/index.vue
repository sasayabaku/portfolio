<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <br />
        <div class="description">
            <p class="text-prim-gray text-sm">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="css" scoped>

.container {
    width: 100%;
    padding: 30px 30px 50px;
    background-color: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1rem);
}



</style>