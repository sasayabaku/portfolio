<template>
    <div id="footer">
        <div class="bottomRow">
            <div class="icons">
                 <div class="each-icon"><a href="https://github.com/sasayabaku" target="_blank"><IconGithub /></a></div>
                 <div class="each-icon"><IconLinkedIn /></div>
                 <div class="each-icon"><IconQiita /></div> 
            </div>
            <div class="copyrightDocument">
                <small>&copy; 2021 sasayabaku</small>
            </div>
        </div>
    </div>
</template>

<script lang="js">
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

    #footer {
        bottom: 0;
    }

    .bottomRow {
        width: 100%;
        margin: 0 auto;

        .copyrightDocument {
            color: #2e2e2e;
            text-align: center;
        }
    }

    .icons {
        display: flex;
        justify-content: center;
        margin: 1rem 2rem;

        @media screen and (min-width: 700px) {
            display: none;
        }

    }

    .each-icon {
        margin: 0 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
    }

</style>