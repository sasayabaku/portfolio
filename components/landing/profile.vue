<template>
    <div id="profile">
        <v-row align="center">
            <v-col cols="12" align="center">
                <div id="greeting">hi! My name is Sasayabaku</div>
                <div class="overview">
                    この辺りに自己紹介を書いていくよ<br />
                    改行とか使っていくよ
                </div>  
            </v-col>
        </v-row>

        <v-row id="skillComponents">
            <v-col md="6" xs="12" v-for="(item, i) in skillItems" :key="i" :to="item.to">
                <div class="content">
                    <div class="icon" :id="item.clid">
                        <img :src="item.icon"/>
                    </div>
                    <div class="charactor">
                        <div class="title">{{item.title}}</div>
                        <div class="description">
                            {{item.description}}
                        </div>
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
            skillItems: [
                {
                    icon: "/service-planning.svg",
                    clid: "cl-red",
                    title: "Service Planning",
                    description: "モックアップ / プロトタイピングを用いたサービス企画"
                },
                {
                    // icon: require("@/static/ml.svg"),
                    icon: '/ml.svg',
                    clid: "cl-blue",
                    title: "Machine Learning",
                    description: "データ分析 / 機械学習のモデル構築によるAIサービスの開発"
                },
                {
                    icon: '/container.svg',
                    clid: "cl-green",
                    title: "Infrastructure",
                    description: "分析ツール運用 / サービス運用のための基盤設計・運用"
                },
            ]
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
        .content {
            display: flex;
            justify-content: center;
            margin-top: 4rem;

            .icon {
                width: 5rem;
                height: 5rem;
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
                padding-left: 1rem;

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

    #cl-red {
        background-color: rgb(212, 58, 89);
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

    #greeting{
        font-size: 2rem;
        font-weight: 600;
    }

</style>