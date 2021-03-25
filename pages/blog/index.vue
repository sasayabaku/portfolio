<template>
    <div id="blog">
        <v-row class="head">
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="text">
                    <div class="accent">
                        Blog
                    </div>
                    <div class="description">
                        My Activities.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="image">
                    <img src='blog_illust.svg'/>
                </div>
                <div class="copyright">illustrate on <a href="https://undraw.co">unDraw</a></div>
            </v-col>
        </v-row>
        <v-row id="contents" justify="center" align="center"> 
            <v-col cols="12" sm="12" md="6" lg="6" v-for="article in articles" :key="article">
                <div class="card-content" data-aos="zoom-out-down">
                    <nuxt-link :to="article.path"><blog-card :image="article.img" :title="article.title" :description="article.description"/></nuxt-link>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import blog_card from '@/components/blog/blog_card.vue';

export default {

    components: {
        blog_card
    },

    async asyncData ({ $content }) {
        const articles = await $content('blog').fetch()

        return {
            articles
        }
    }
}
</script>

<style scoped lang="scss">

    #blog {
        margin: 1rem 2rem;

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
            @media screen and (max-width: 480px) {
                text-align: center;
            }
            @media screen and (min-width: 480px) {
                text-align: left;
            }
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

    .card-content {
        margin: 1.5rem 0;
    }
</style>