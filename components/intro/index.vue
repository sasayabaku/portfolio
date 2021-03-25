<template>
    <div class="introduce">
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="text">
                    <div class="accent">
                        About Me.
                    </div>
                    <div class="description">
                        Hi! I'm sasayabaku.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" align="center">
                <div class="image">
                    <img src='developer_illust.svg'/>
                </div>
                <div class="copyright">illustrate on <a href="https://undraw.co">unDraw</a></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .introduce {
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
        @media screen and (min-width: 480px) {
            margin: 0 10rem;
        }

        .accent {
            @media screen and (max-width: 480px) {
                text-align: center;
            }
            @media screen and (min-width: 480px) {
                text-align: left;
            }

            font-family: 'arial';
            font-size: 2rem;
            font-weight: 900;
        }

        .description {
            @media screen and (max-width: 480px) {
                text-align: center;
            }
            @media screen and (min-width: 480px) {
                text-align: left;
            }
            margin-top: 1rem;
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
</style>