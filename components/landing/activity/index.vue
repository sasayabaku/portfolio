<template>
    <div class="content">
        <v-row>
            <v-col cols="12" align="center">
                <div class="flow">
                    <div class="activity">Activity</div>
                    <div class="overview">
                        These are My Activity.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" align="center">
                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="4" align="center">
                        <div class="card" id="github" data-aos="zoom-in" data-aos-delay="100">
                            <div class="image">
                                <img src="/icons/Github.png" />
                            </div>
                            <div class="text">
                                <div class="title"> 
                                    GitHub
                                </div>
                                <div class="description">
                                    This is my Repository
                                </div>
                            </div>
                            <a href="https://github.com/sasayabaku" target="_blank" rel="noopener noreferrer" />
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4" align="center"> 
                        <div class="card" id="qiita" data-aos="zoom-in" data-aos-delay="300">
                            <div class="image">
                                <img src="/icons/Qiita.png" />
                            </div>
                            <div class="text">
                                <div class="title">
                                    Qiita
                                </div>
                                <div class="description">
                                    Personal Tech Blog
                                </div>
                            </div>
                            <a href="https://qiita.com/sasayabaku" target="_blank" rel="noopener noreferrer" />
                        </div>
                    </v-col> 
                    <v-col cols="12" sm="12" md="6" lg="4" align="center" data-aos="zoom-in" data-aos-delay="500"> 
                        <div class="card" id="linkedin">
                            <div class="image">
                                <img src="/icons/Linkedin.png" />
                            </div>
                            <div class="text">
                                <div class="title">
                                    LinkedIn
                                </div>
                                <div class="description">
                                    My Business History
                                </div>
                            </div>
                            <a href="https://www.linkedin.com/in/takenobu-sasatani-2701a514b" target="_blank" rel="noopener noreferrer" />
                        </div>
                    </v-col>                     
                </v-row>
            </v-col>
        </v-row>
        <v-row class="sub-component" id="activity-chart"><ActivityChart /></v-row>
    </div>
</template>

<script>
import ActivityChart from './activity-chart'
export default {
    components: {
        ActivityChart
    }
}
</script>

<style lang="scss" scoped>

    .sub-component {
        margin: 2rem 0
    }

    .activity {
        font-size: 2rem;
        font-weight: 600;
        font-family: 'arial';
    }

    .overview {
        margin-top: 0.5rem;
        color: #626a7f;
    }

    .card {
        height: 80px;
        width: 300px;
        border: 3px solid #e2e2e2;
        border-radius: 1rem;
        position: relative;
        display:flex;
        align-items: center;

        a {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .image {
            height: 100%;
            width: 20%;
            margin: 0 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 70%;
            }

        }

        .text {
            width: 70%;

            display:block;
            text-align: left;

            .title {
                font-size: 1.4rem;
                font-weight: 600;
            }

            .description {
                padding-top: 0.3rem;
                color: #707070;
            }
        }

    }

    #activity-chart {
        padding: 0 2rem;
    }
</style>