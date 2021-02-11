<template>
    <div id="skillsets">
        <v-row justify="space-around">
            <v-col md="6" align="center" data-aos="zoom-in" data-aos-delay="100">
                <div id="iconsView">
                    <div class="icon" :id="item.clid" v-for="(item, i) in icons" :key="i">
                        <img :src="item.icon">
                    </div>
                </div>
            </v-col>

            <v-col cols="12" sm="12" md="6" align="center" data-aos="fade-left" data-aos-delay="200">
                <div id="flow">
                    <div class="title">Refining Skills</div>
                    <div class="description">
                        Good visual makes good feeling<br />
                        案件やチーム環境に合わせて、<br />必要なスキルを選択/習得していくスタイル
                    </div>
                    <div class="movepage">
                        <div class="goDetail">Go Detail</div>
                        <div class="thinright"></div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    data() {
        return {
            icons:[
                {
                    icon: '/icons/pytorch.svg',
                    clid: "cl-red",
                },
                {
                    icon: '/icons/docker.svg',
                    clid: "cl-blue"
                },
                {
                    icon: '/icons/react.svg',
                    clid: "cl-purple"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    $accentColor: #e4286d;

    #skillsets {
        margin-top: 100px;
        height: 100vh
    }

    #iconsView {
        width: 100%;
        height: 300px;
    }

    #flow {
        // width: 100%;
        width: 50%;
        height: 300px;
        display: block;
        text-align: left;

        .title {
            font-size: 1.8rem;
            font-weight: 600;
        }

        .description {
            padding-top: 1rem;
            color: #666;
            font-size: 1rem;
            line-height: 2;
        }

        .movepage {

            position: relative;
            top: 1rem;

            .goDetail {
                color: $accentColor;
                font-size: 1.2rem;
                font-weight: 600;
                padding-left: 1rem;
            }

            .thinright {

                $arrowLength: 200px;
                position: relative;

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 6px;
                    left: 0px;
                    width: $arrowLength;
                    height: 2px;
                    background: $accentColor;
                }

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: calc(#{$arrowLength} - 14px);
                    width: 14px;
                    height: 14px;
                    border: 3px solid;
                    border-color: transparent transparent $accentColor $accentColor;
                    border-radius: 5px;
                    transform: rotate(-135deg);
                }
            }
        }

    }

    #iconsView {
        .icon {
            width: 5rem;
            height: 5rem;
            border-radius: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            // background-color:firebrick;

            transform: rotate(-15deg);

            // animation: rotation 2s linear infinite alternate;
            
            // @keyframes rotation {
            //     0% { transform: rotate(-15deg);}
            //     100% { transform: rotate(20deg)}
            // }

            img {
                width: 70%;
            }

        }

        #cl-red{
            background-color: #E63421;
            margin-left: 4rem;
        }
        #cl-blue {
            background-color: lightskyblue;
            margin-right: 19rem;
        }
        #cl-yellow {
            background-color: #ddb71c;
        }
        #cl-purple {
            background-color: #521E88;
        }
    }




</style>