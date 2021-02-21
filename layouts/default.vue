<template>
    <div>
        <div class="header"><Header/></div>
        <div class="contents">
            <nuxt />
        </div>
        <div class="footer"><Footer /></div>
    </div>
</template>

<script>
import Header from '~/layouts/Header.vue';
import Footer from '~/layouts/Footer.vue';
export default {
    components: {
        Header,
        Footer
    },
}
</script>

<style lang="scss">
    body {
        font-size: 16px;
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

<style scoped>
    .header {
        width: 100%;
        height: 8vh;
        min-height: 60px;
        position: fixed;
        z-index: 1;
    }

    .contents {
        width: 100vw;
        padding-top: 8vh;
        position: relative;
    }

    .footer {
        width: 100%;
        position: relative;
    }
</style>