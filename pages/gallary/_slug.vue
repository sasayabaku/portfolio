<template>
    <article class="blog" data-aos="fade-up" data-aos-delay="300">
        <nuxt-link to="/gallary"><div class="go_back"><v-icon>mdi-arrow-left-thick</v-icon> <span class="gb_text">Go Back</span></div></nuxt-link>
        <div class="title">{{ article.title }}</div>
        <div class="history">Last Update: {{formatDate(article.updatedAt)}}</div>

        <div class="img"><img :src="article.img"/></div>

        <br /><div></div><br />
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        // fetch our article here
        const article = await $content('gallary', params.slug).fetch()
        return { article }
    },

    methods: {
        formatDate(date) {
            // format date Japan timezone
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('jp', options)
        }
    }
}
</script>

<style lang="scss">
    .nuxt-content {
        p {
            color: #37374B;
            line-height: 1.8rem;
        }

        hr {
            margin-top: 2rem;
        }

        ul {
            margin: 1rem 0;
            padding-left: 3rem;
            line-height: 1.8rem;
            color: #37374B;
        }

        h1 {
            margin: 2rem 0;
            color: #37374B;
            font-size: 2rem;
            position: relative;

        }

        h3 {
            margin: 2rem 0 1rem 0;
            font-size: 1.6rem;
            color: #37374B;
        }
    }   
</style>

<style lang="scss" scoped>
    .blog {
        width: 60%;
        margin: 3rem auto;

        .img {
            margin: 2rem auto;
            width: 80%;
            display: flex;
            justify-content: center;

            img {
                margin: auto;
                max-width: 100%;
                min-width: 80%;
            }


        }

        .title {
            margin: 2rem 0 0 0;
            font-size: 3.2rem;
            font-weight: 800;
            font-family: "Helvetica Neue", sohne, Helvetica, Arial;
        }

        .history {
            color: rgb(150, 150, 150);
        }
    }

    .go_back {
        display: flex;
        align-items: center;
        color: #37374B;

        .gb_text {
            padding-left: 0.6rem;
        }
    }


</style>