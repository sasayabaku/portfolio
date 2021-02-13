<template>
    <div id="activity-chart" >
        <v-row>
            <v-tabs vertical slider-color="#9e9e9e">
                <v-tab>Qiita</v-tab>
                <v-tab>GitHub</v-tab>
                <v-tab-item>
                    <v-row>
                        <v-col cols="12" sm="6" md="4" lg="4">
                            <QiitaContribChart />
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="4">
                            <QiitaStockChart />
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs>
        </v-row>
    </div>
</template>

<script>
import QiitaContribChart from '~/components/charts/qiita-contribution.vue';
import QiitaStockChart from '~/components/charts/qiita-stocks.vue';
export default {
    components: {
        QiitaContribChart,
        QiitaStockChart
    }
}
</script>

