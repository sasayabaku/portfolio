<template>
    <div class="main">
        <div class="header"><Header/></div>
        <div class="contents">
            <nuxt />
        </div>
        <div class="footer"><Footer /></div>
        <div class="link">
            <Links />
        </div>

    </div>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
import Links from '~/layouts/links.vue';
export default {
    components: {
        Header,
        Footer,
        Links
    },
}
</script>

<style lang="scss">

    @media screen and (min-width: 480px){
        body {
            font-size: 16px;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px){
        body {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 320px) {
        body {
            font-size: 10px;
        }
    }

    body {
        font-family: Helvetica, sans-serif;
        width: 100vw;
    }

    a {
        text-decoration: none;
    }

    .v-tab {
        text-transform: none !important;
    }
</style>

<style lang="scss" scoped>
    .main {
        overflow: hidden;
    }

    .header {
        width: 100%;
        height: 8vh;
        min-height: 60px;
        position: fixed;
        z-index: 1;
    }

    .contents {
        padding-top: 8vh;
        position: relative;
    }

    .link {
        display: flex;

        @media screen and (max-width: 700px) {
            display: none;
        }
    }

    .footer {
        width: 60%;
        position: relative;
        margin: 1.5rem auto;
    }
</style>