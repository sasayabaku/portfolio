<template>
    <div class="card">
        <div class="title">
            {{ title }}
        </div>
        <div class="likes">
            {{ likes }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        likes: Number
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: block;
        position: relative;
        border-radius: 10px;
        box-shadow: 1px 1px 30px rgba($color: #000000, $alpha: 0.2);
        padding: 2rem;
        background-color: rgba($color: #fff, $alpha: 0.2);
    }
</style>