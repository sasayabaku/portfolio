<template>
    <div class="introduce">
        <v-row>
            <v-col cols="12" sm="12" md="7" align="center">
                <div class="text">
                    <div class="accent">
                        About Me.
                    </div>
                    <div class="description">
                        Hi! I'm sasayabaku.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="5">
                <div class="image">

                </div>
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
        // background: linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(30,30,30,0.6) 20%, rgba(252, 252, 252, 0.6) 100%), url('/coding.jpg');
        // background-size: cover;
    }

    .text {

        display: block;
        width: 70%;
        padding: 0 3rem;

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
</style>