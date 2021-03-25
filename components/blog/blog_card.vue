<template>
    <!-- <div class="card1"> -->
        <!-- <v-row align="center"> -->
            <!-- <v-col cols="12" md="6" align="center">
                <div class="image">
                    <img :src="image" />
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="text">
                    <div class="title">{{ title }}</div>
                    <div class="description">{{ description }}</div>
                </div>
            </v-col> -->
            <vs-row><vs-col  align="center">
            <vs-card type="1">
                <template #title>
                    <h3>{{ title }}</h3>
                </template>
                <template #img>
                    <img :src="image" />
                </template>
                <template #text>
                    {{ description }}
                </template>
            </vs-card>
        </vs-col></vs-row>
    <!-- </div> -->
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

        display: flex;
        &:hover {
            opacity: 0.5;
        }

        .image {
            position: relative;
            height: 13rem;
            width: 20rem;
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

                width: 100%;
                height: 100%;
                max-width: 120%;
                max-height: 120%;
            }
        }

        .text {
            margin-left: 1.5rem;
            padding-top: 1rem;
            
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