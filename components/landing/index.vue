<template>
    <Profile />
</template>

<script>

import Profile from "./profile.vue";

export default {
    components: {
        Profile
    }
}
</script>

<style lang="scss" scoped>
    .first {
        height: 180vh;
        padding-left: 2rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 500;
        padding-left: 1rem;    
    }

    #line {
        width: 80vw;
        margin-top: 0.3rem;
        border:solid 1px #e4286d6c;
    }

    #skillComponents2 {

        .content {

            display: flex;
            justify-content: center;

            .icon {
                width: 5rem;
                height: 5rem;
                border: solid 1px black;
                border-radius: 50%;
            }

        }

    }
</style>