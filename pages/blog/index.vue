<template>
    <div id="blog">
        <v-row class="head"  data-aos="fade-up">
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
                    <img src='/blog_illust.svg'/>
                </div>
                <div class="copyright">illustrate on <a href="https://undraw.co">unDraw</a></div>
            </v-col>
        </v-row>


        <div class="contents">
            <div v-if="loaded" class="rows">
                <v-row align="center">
                    <v-col cols="12" sm="12" md="6" lg="6" v-for="content in articles" :key="content.url" data-aos="zoom-in" data-aos-delay="200">
                        <a :href="content.url" target="_blank"><ContentCard :title="content.title" :likes="content.likes_count" :service="content.service"/></a>
                    </v-col>
                </v-row>
            </div>
            <div v-else class="rows">
                <v-row align="center">
                    <v-col cols="12" align="center">
                        <div>Loading・・・</div>
                        <Lottie :options="defaultOptions" :height="100" :width="100" :animCreated="handleAnimation" />
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import ContentCard from '~/components/blog/contents_card.vue';
import axios from 'axios';

import Lottie from '~/components/utils/lottie.vue';
import * as animationData from "~/assets/data.json";

export default {
    components: {
        ContentCard,
        Lottie
    },

    data() {
        return {
            articles: null,
            loaded: false,
            defaultOptions:  {animationData: animationData },
            animationSpeed: 1
        }
    },
    methods:{
        handleAnimation: (anim) => {
            this.anim = anim;
        }
    },

    async created() {
        const sort_articles = (a, b) => {
            const dateA = new Date(a['updated_at']);
            const dateB = new Date(b['updated_at']);

            let comparison = 0;
            if(dateA > dateB) {
                comparison = 1;
            } else if (dateA < dateB) {
                comparison = -1;
            }

            return comparison * -1;
        };

        const accessToken = this.$config.qiitaURL;
        const url = "https://qiita.com/api/v2/users/sasayabaku/items?per_page=100";
        const config = {
            headers : {
                "content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }

        const response = await axios.get(url, config);
        const data = await response.data;
        const articles = await data.map(n => ({
            'title':n['title'],
            'url':n['url'],
            'updated_at':n['updated_at'],
            'likes_count':n['likes_count'],
            'service':'qiita'
        }));

        await articles.sort(sort_articles);
        this.articles = await articles;

        this.loaded = true;
    }
}
</script>

<style scoped lang="scss">

    a { 
        text-decoration: none;
        color: black;
    }

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

    .contents {
        width: 100vw;
        padding: 3rem 10rem;
    }
</style>