<template>
    <div id="garally">
        <v-row class="head" data-aos="zoom-in" data-aos-delay="100">
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="text">
                    <div class="accent">
                        Gallary
                    </div>
                    <div class="description">
                        Development Experiment.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="image">
                    <img src="gallary_illust.svg" />
                </div>
                <div class="copyright">illustrate on <a href="https://undraw.co">unDraw</a></div>
            </v-col>
        </v-row>

        <v-row id="contents" justify="center" align="center">
            <!-- <v-col cols="12" md="6" lg="3">
                <Items title="Docker" sentence="This is Container Technical Library" color="#3D4BBAB0"/>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <Items title="Vue.js" sentence="UI Framework" color="#35A66CB0" />
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <Items title="React.js" sentence="UI Framework" color="#3176CAb0" />
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <Items title="PyTorch" sentence="Deep Learning フレームワーク" color="#DF3D25b0" />
            </v-col>              -->
            <v-col cols="12" md="6" lg="3" v-for="article in articles" :key="article" data-aos="fade-up" data-aos-delay="300">
                <nuxt-link :to="article.path"><Items :title="article.title" :sentence="article.description" :color="article.color" /></nuxt-link>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import Items from '~/components/gallary/item.vue';
// import Item from '../../components/gallary/item.vue';

export default {
    components: {
        Items
    },

    async asyncData ({ $content }) {
        const articles = await $content('gallary').fetch();

        return {
            articles
        }
    },

    methods: {
        showModal(value) {
            this.$modal.show(value)
        }
    }
}
</script>

<style lang="scss">
    .vm--modal {
        margin: 2rem 0;
    }
</style>

<style lang="scss" scoped>

    #garally {
        margin: 1rem 0;
        padding: 0rem 10rem;

        @media screen and (min-width: 700px) {
            padding: 0rem 6rem;
        }

        @media screen and (max-width: 700px) {
            padding: 0rem 3rem;
        }

        .head {
            padding: 2rem 0;
            margin: 1rem 0;
        }

        .image {
            height: 10rem;
            img {
                height: 100%;
            }
        }
    }

    .text {
        display: block;
        width: 90%;
        @media screen and (min-width: 480px) {
            margin: 0 10rem;
        }

        .accent {
            text-align: left;
            font-family: 'arial';
            font-size: 2rem;
            font-weight: 900;
        }

        .description {
            @media screen and (max-width: 480px) {
                text-align: center;
            }
            @media screen and (min-width: 480px) {
                text-align: left;
            }
            
            margin-top: 1rem;
            font-size: 1.2rem;
            color: #626a7f;
        }
    }    

    .copyright {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        padding-left: 2rem;
        color: #cecece;

        a {
            text-decoration-line: underline;
            color: #cecece;
        }
    }

    .content{
        border: 1px solid #e6e4e4;
        border-radius: 0.5rem;
        padding: 1.5rem;
        min-height: 20rem;
        min-width: 200px;
        position: relative;

        .icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;

            img {
                width: 60%;
            }
        }

        .name {
            margin-top: 0.8rem;
            font-size: 1.2rem;
        }

        .description {
            margin-top: 0.5rem;
            font-size: 0.8rem;
        }

        .links {
            position: absolute;
            width: 80%;
            bottom: 1rem;
            display: flex;
            justify-content: space-evenly;

            .flat-button {
                display: inline-block;
                padding: 0.3em 1em;
                border: 2px solid #e4286d;
                background-color: #e4286d;
                border-radius: 0.5em;
                color: white;
                outline: none;
            }

            .reverse-flat-button {
                display: inline-block;
                padding: 0.3em 1em;
                background-color: white;
                border: 2px solid #e4286d;
                border-radius: 0.5em;
                color: #e4286d;
                outline: none;
            }
        }

        #cl-red {
            background-color: #e4286d;
        }
        #cl-blue {
            background-color: #4f4ca6;
        }
        #cl-green {
            background-color: #4bb088;
        }
        #cl-yellow {
            background-color: #f2d466;
        }
    }   
</style>