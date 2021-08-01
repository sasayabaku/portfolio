<template>
    <div class="card">
        <div class="icon" :class="service">
            <!-- <img class="image_content" /> -->
        </div>
        <div class="text">
            <div class="title">
                {{ title }}
            </div>
            <div class="likes">
                <font-awesome-icon icon="heart" class="ac-icon"/> {{ likes }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        likes: Number,
        service: String
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        position: relative;
        border-radius: 10px;
        box-shadow: 1px 1px 30px rgba($color: #000000, $alpha: 0.2);
        padding: 2rem;
        background-color: rgba($color: #fff, $alpha: 0.2);
        align-items: center;
    }

    .icon {
        min-width: 60px;
        min-height: 60px;
        width: 4em;
        height: 4em;
    }

    .icon.qiita {
        background-color: #c0ecdb;
    }

    .text {
        padding: 0 2rem;
    }

    .likes {
        margin-top: 1rem;
    }

    .likes .ac-icon {
        color: red;
    }
</style>