<template>
    <article class="blog">
        <div class="img"><img :src="article.img"/></div>
        <div class="title">{{ article.title }}</div>
        <div class="history">Last Update: {{formatDate(article.updatedAt)}}</div>

        <br /><div></div><br />
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        // fetch our article here
        const article = await $content('blog', params.slug).fetch()
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
            color: rgb(88, 81, 81);
        }

        h1 {
            margin: 3rem 0;

            &::after {
                content: "";
                position: absolute;
                width: 60%;
                height: 2px;
                background: #e4286d;
                left: 0;
                transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                margin: 2rem 0;

            }
        }

        h2 {
            margin: 2rem 0 1rem 0;
            // color: green;
        }

        h3 {
            margin: 2rem 0 1rem 0;
            // color: yellow;
        }
    }   
</style>

<style lang="scss" scoped>
    .blog {
        width: 60%;
        margin: 3rem auto;

        .img {
            width: 100%;
            text-align: center;
        }

        .title {
            margin: 2rem 0 0 0;
            font-size: 2rem;
            font-weight: 600;
        }

        .history {
            color: rgb(150, 150, 150);
        }
    }


</style>