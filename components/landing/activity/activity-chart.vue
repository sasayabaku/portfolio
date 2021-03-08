<template>
    <div id="activity-chart">
        <v-row><v-col cols="12" sm="12" md="12" lg=12>
            <v-tabs slider-color="#9e9e9e">
                <v-tab>Qiita</v-tab>
                <v-tab>GitHub</v-tab>
                <v-tab-item>
                    <v-row>
                        <v-col v-if="loaded" cols="12" sm="12" md="6" lg="4" align="center">
                            <QiitaContribChart :likesData="likes" :Date="date"/>
                        </v-col>
                        <v-col v-if="loaded" cols="12" sm="12" md="6" lg="4" align="center">
                            <QiitaStockChart />
                        </v-col>
                        <v-col v-if="loaded" cols="12" sm="12" md="6" lg="4" align="center">
                            <QiitaViewChart />
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                        <v-col v-if="loaded" cols="12" sm="12" md="6" lg="4" align="center">
                            <GitHubContrib />
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-col></v-row>
    </div>
</template>

<script>
import axios from 'axios';
import QiitaContribChart from '~/components/charts/qiita-contribution.vue';
import QiitaStockChart from '~/components/charts/qiita-stocks.vue';
import QiitaViewChart from '~/components/charts/qiita-views.vue';
import GitHubContrib from '~/components/charts/github-contribution.vue';
export default {
    data() {
        return {
            loaded: false,
            date: ['2020/01/01', '2020/01/02', '2020/01/03', '2020/01/04', '2020/01/05'],
            likes: null,
            stocks: null,
            views: null
        }
    },
    async created() {
        const response = await axios.get('https://private-engineer.an.r.appspot.com/get_work?date=14');
        const data = await response.data.data;
        const date = await data.map(n => new Date(Date.parse(n['date'])).toLocaleDateString());
        const likes = await data.map(n => n['likes']);
        const stocks = await data.map(n => n['stocks']);
        const views = await data.map(n => n['views']);
        await this.$store.commit('qiita/setDate', date);
        await this.$store.commit('qiita/setLikes', likes);
        await this.$store.commit('qiita/setStocks', stocks);
        await this.$store.commit('qiita/setViews', views);
        this.loaded = true;
    },
    components: {
        QiitaContribChart,
        QiitaStockChart,
        QiitaViewChart,
        GitHubContrib
    },

}
</script>
<style>
    .theme--light.v-tabs-items {
        background-color: none;
    }
</style>
<style scoped>
    #activity-chart {
        width: 100vw;
    }

    .v-tab__items,
    .v-window-item,
    .v-window >>> div.v-window__container {
        width: 90%;
        padding: 0 1rem;
    }
</style>
