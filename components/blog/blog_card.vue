<template>
    <div class="card">
        <div class="image">
            <img :src="image" />
        </div>
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'title', 'description']
}
</script>

<style lang="scss" scoped>

    $base-color: #373c49;
    $brighter-color: #626a7f;

    .card {
        border: 1px solid #919191;
        border-radius: 0.5rem;
        padding: 1rem;

        height: 15rem;

        display: flex;

        &:hover {
            opacity: 0.5;
        }

        .image {
            position: relative;
            height: 13rem;
            width: 45%;
            border: 1px solid $brighter-color;
            border-radius: 0.5rem;
            overflow: hidden;

            img {
                position: absolute;
                top: 50%;
                left:50%;
                -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);


                width: auto;
                height: auto;
                max-width: 120%;
                max-heigit: 120%;
            }
        }

        .text {
            margin-left: 1.5rem;
            padding-top: 1rem;
            width: 55%;
            
            .title {
                font-weight: 500;
                color: $base-color;
                font-size: 1.3rem;
            }

            .description {
                margin-top: 1rem;
                font-size: 0.8rem;
                color: $brighter-color;
                line-height: 1.8;
            }
        }
    }
</style>