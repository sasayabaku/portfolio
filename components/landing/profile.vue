<template>
    <div id="profile" data-aos="zoom-in" data-aos-delay="300">
        <v-row align="center">
            <v-col cols="12" align="center">
                <div id="greeting">Skillsets</div>
                <div class="overview">
                    These are skillsets.
                </div>  
            </v-col>
        </v-row>

        <v-row class="skillComponents">
            <v-col cols="12" md="6" lg="4" v-for="skill in main_skill" :key="skill.id">
                <SkillCard :content="skill" />
            </v-col>
        </v-row>

    </div>    
</template>

<script>
import SkillCard from "~/components/skillsets/skill_card.vue";
export default {
    components: {
        SkillCard
    },
    computed: {
        main_skill: {
            get() {
                return this.$store.state.gallary.main_skill;
            }
        }
    }
}

</script>

<style lang="scss" scoped>

    $base-color: #373c49;
    $brighter-color: #626a7f;

    #profile{
        padding: 0 3rem;
    }

    #skillComponents {

        .contentRow {

            display: flex;
            justify-content: center;

            .content {
                width: 85%;
                display: flex;
                margin-top: 4rem;

                .icon {
                    width: 20%;
                    height: 5rem;
                    max-width: 5rem;
                    min-width: 5rem;
                    border-radius: 25%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 70%;
                    }
                }

                .charactor {
                    display: block;
                    margin-left: 1rem;
                    width: 80%;

                    .title {
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: $base-color;
                    }
                    .description {
                        color: $brighter-color;
                    }
                }
            }
        }
    }

    .skillComponents {
        margin-top: 1rem;
    }

    #greeting{
        font-size: 2rem;
        font-weight: 600;
    }

    .overview {
        margin-top: 0.5rem;
        color: #626a7f;
    }

</style>