<template>
    <div id="garally">
        <v-row id="contents" justify="center" align="center">
            <v-col sm="6" md="3" v-for="skill in $store.state.gallary.skillsets" :key="skill.id">
                <div class="content">
                    <div class="icon" :id="skill.clid">
                     <img :src="skill.imgfile" />
                    </div>
                    <div class="name"><strong>{{skill.name}}</strong></div>
                    <div class="description">{{skill.description}}</div>

                    <div class="links">
                        <button class="flat-button"><strong>Detail Skill</strong></button>
                        <button class="reverse-flat-button"><strong>Gallery</strong></button>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
}
</script>

<style lang="scss" scoped>

    #garally {
        margin-bottom: 100px;
        padding: 0 5rem;
        
    }

    .content{
        border: 1px solid #e6e4e4;
        border-radius: 0.5rem;
        padding: 1.5rem;
        min-height: 20rem;
        min-width: 290px;
        position: relative;

        .icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;

            img {
                width: 60%;
            }
        }

        .name {
            margin-top: 0.8rem;
            font-size: 1.2rem;
            // font-weight: 800;
        }

        .description {
            margin-top: 0.5rem;
            font-size: 0.8rem;
        }

        .links {
            position: absolute;
            width: 80%;
            bottom: 1rem;
            display: flex;
            justify-content: space-evenly;

            .flat-button {
                display: inline-block;
                padding: 0.3em 1em;
                border: 2px solid #e4286d;
                background-color: #e4286d;
                border-radius: 0.5em;
                color: white;
                outline: none;
            }

            .reverse-flat-button {
                display: inline-block;
                padding: 0.3em 1em;
                background-color: white;
                border: 2px solid #e4286d;
                border-radius: 0.5em;
                color: #e4286d;
                outline: none;
            }
        }

        #cl-red {
            background-color: #e4286d;
        }
        #cl-blue {
            background-color: #4f4ca6;
        }
        #cl-green {
            background-color: #4bb088;
        }
        #cl-yellow {
            background-color: #f2d466;
        }
    }   
</style>