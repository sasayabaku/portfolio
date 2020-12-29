<template>
    <div id="blog">
        <v-row id="contents" justify="center" align="center"> 
            <v-col sm="12" md="12" lg="6" v-for="article in articles" :key="article">
                <div class="card-content" data-aos="zoom-out-down">
                    <blog-card :image="article.img" :title="article.title" :description="article.description" />
                </div>
            </v-col>
        </v-row>
        <!-- <nuxt-link :to="article.path">{{ article.title }}</nuxt-link> -->
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
        margin: 0 2rem;
    }

    .card-content {
        margin: 1.5rem 0;
        // padding: 0 1rem;
    }
</style>