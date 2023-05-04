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
        },
        color: {
            type: String,
            required: false
        },
        bgimg: {
            type: String,
            required: false
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-lg font-bold title">{{ title }}</h2>
        <br />
        <div class="description">
            <p class="text-prim-gray text-sm">{{ description }}</p>
            <p class="text-sm">{{ color }}</p>
        </div>
    </div>
</template>

<style lang="css" scoped>

.container {
    position: relative;
    display: block;
    width: 100%;
    padding: 30px 30px 50px;
    background-color: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1rem);
    z-index: 1;

    overflow: hidden;
}

.container::before {
    position: absolute;
    top: 0;
    left: -15%;
    content: '';
    width: 180%;
    height: 300%;
    border-radius: 80px 100px 80px 100px;
    /* background-color: v-bind(color); */
    background-image: v-bind(bgimg);
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: lighten;
    background-repeat: no-repeat;
    transform-origin: left bottom;
    transform: skewY(-10deg) scale(1, 0);
    transition: transform 0.8s ease;
    z-index: 2;
}

.container:hover::before {
    transform-origin: left top;
    transform: skewY(-10deg) scale(1, 1);
    z-index: 2;
}

.container:hover .title {
    position: relative;
    z-index: 3;
}

.container:hover .description p{
    position: relative;
    z-index: 4;
}

</style>