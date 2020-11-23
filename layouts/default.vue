<template>
    <div>
        <div class="header"><Header/></div>
        <main class="contents">
            <nuxt />
        </main>
        <div><Footer /></div>
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

<style scoped>
    .header {
        width: 100%;
        height: 8vh;
        position: fixed;
        z-index: 1;
    }

    .contents {
        padding-top: 8vh;
    }
</style>