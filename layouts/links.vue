<template>
    <div id="links">
        <div class="container">
            <div class="icons">
                 <div class="each-icon"><a href="https://github.com/sasayabaku" target="_blank" rel="noopener noreferrer"><IconGithub /></a></div>
                 <div class="each-icon"><a href="https://www.linkedin.com/in/takenobu-sasatani-2701a514b" target="_blank" rel="noopener noreferrer"><IconLinkedIn /></a></div>
                 <div class="each-icon"><a href="https://qiita.com/sasayabaku" target="_blank" rel="noopener noreferrer"><IconQiita /></a></div>
            </div>
        </div>
    </div>
</template>

<script>
import IconGithub from '~/components/landing/sns-icons/github.vue';
import IconLinkedIn from '~/components/landing/sns-icons/linkedin.vue';
import IconQiita from '~/components/landing/sns-icons/qiita.vue';
export default {
    components: {
        IconGithub,
        IconLinkedIn,
        IconQiita
    }
}
</script>

<style lang="scss" scoped>
    #links {
        position: fixed;
        width: 120px;
        height: 300px;
        bottom: 0;
    }

    .container {
        margin: 0 auto;
    }

    .each-icon {
        margin: 1.5rem auto;
        width: 2.5rem;
        height: 2.5rem;
    }
</style>