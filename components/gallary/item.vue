<template>
    <div class="card" :style="styles">
        <div class="title">
            {{ title }}
        </div>
        <div class="sentence">
            {{ sentence }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        sentence: String,
        color: {
            type: String,
            required: false,        
        }
    },
    computed: {
        styles() {
            return {
                '--color': this.color
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .card {
        --color: orange;
        display: block;
        position: relative;
        border-radius: 10px;
        box-shadow: 1px 1px 30px rgba($color: #000000, $alpha: 0.2);
        padding: 1.5rem;
        background-color: rgba($color: #fff, $alpha: 0.3);
        color: black;
        z-index: 2;

        overflow: hidden;

        &::before {

            position:absolute;
            top: 0;
            left: -15%;
            z-index: 1;
            content: '';
            width: 180%;
            height: 300%;
            border-radius: 80px 100px 80px 100px;
            background-color: var(--color);
            transform-origin: left bottom;
            transform: skewY(-10deg) scale(1, 0);
            transition: transform 1.2s ease;
        }

        &:hover::before {
            transform-origin: left top;
            transform: skewY(-10deg) scale(1, 1);
        }

        &:hover {
            .title {
                color: #fff;
            }

            .sentence {
                color: #fff;
            }
        }

    }

    .title {
        position: relative;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        z-index: 2;
    }

    .sentence {
        position: relative;
        z-index: 3;
    }
</style>