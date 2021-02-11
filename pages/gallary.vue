<template>
    <div id="garally">
        <v-row class="head">
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="text">
                    <div class="accent">
                        Gallary
                    </div>
                    <div class="description">
                        Development Experiment.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="image">
                    <img src="gallary_illust.svg" />
                </div>
                <div class="copyright">illustrate on <a href="https://undraw.co">unDraw</a></div>
            </v-col>
        </v-row>

        <v-row id="contents" justify="center" align="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="skill in $store.state.gallary.skillsets" :key="skill.id">
                <div class="content" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon" :id="skill.clid">
                     <img :src="skill.imgfile" />
                    </div>
                    <div class="name"><strong>{{skill.name}}</strong></div>
                    <div class="description">{{skill.description}}</div>

                    <div class="links">
                        <button class="flat-button" @click="showModal(skill.name+'Detail')"><strong>Detail</strong></button>
                        <!-- 以下でGallaryの情報を更新 -->
                        <button class="reverse-flat-button" @click="showModal('showGallary')"><strong>Gallery</strong></button>
                    </div>
                </div>
            </v-col>
        </v-row>
        <div class="content-modal">
            <modal name="DockerDetail" :resizable="false" :scrollable="true" height="auto" width="90%"><DockerDetail/></modal>
            <modal name="PyTorchDetail" :resizable="false" :scrollable="true" height="auto" width="90%"><PyTorchDetail/></modal>
            <modal name="ReactDetail" :resizable="false" :scrollable="true" height="auto" width="90%"><ReactDetail/></modal>
            <modal name="VueDetail" :resizable="false" :scrollable="true" height="auto" width="90%"><VueDetail/></modal>

            <modal name="showGallary" :resizable="false" width="90%">
                <div>   
                    Show Gallary 工事中
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import DockerDetail from "@/components/gallary/docker.vue";
import PyTorchDetail from "@/components/gallary/pytorch.vue";
import ReactDetail from "@/components/gallary/react.vue";
import VueDetail from "@/components/gallary/vue.vue";

export default {
    components: {
        DockerDetail,
        PyTorchDetail,
        ReactDetail,
        VueDetail
    },

    methods: {
        showModal(value) {
            this.$modal.show(value)
        }
    }
}
</script>

<style lang="scss">
    .vm--modal {
        margin: 2rem 0;
    }
</style>

<style lang="scss" scoped>

    #garally {
        margin: 1rem 0;
        padding: 0 3rem;


        .head {
            padding: 2rem 0;
            margin: 1rem 0;
        }

        .image {
            height: 10rem;
            img {
                height: 100%;
            }
        }
    }

    .text {
        display: block;
        width: 90%;
        margin: 0 10rem;

        .accent {
            text-align: left;
            font-family: 'arial';
            font-size: 2rem;
            font-weight: 900;
        }

        .description {
            margin-top: 1rem;
            text-align: left;
            font-size: 1.2rem;
            color: #626a7f;
        }
    }    

    .copyright {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        padding-left: 2rem;
        color: #cecece;

        a {
            text-decoration-line: underline;
            color: #cecece;
        }
    }

    .content{
        border: 1px solid #e6e4e4;
        border-radius: 0.5rem;
        padding: 1.5rem;
        min-height: 20rem;
        min-width: 200px;
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