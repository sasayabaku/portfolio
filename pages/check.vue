<template>
    <div id="garally">
        <v-row>
            <v-tabs vertical right slider-color="#9e9e9e">
                <v-tab>Qiita</v-tab>
                <v-tab>GitHub</v-tab>
            <v-tab-item>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3"><QiitaContribChart /></v-col>
                    <v-col cols="12" sm="6" md="4" lg="3"><QiitaStockChart /></v-col>
                </v-row>
            </v-tab-item>
            </v-tabs>
        </v-row>
    </div>
</template>
<script>
import QiitaContribChart from '~/components/charts/qiita-contribution.vue';
import QiitaStockChart from '~/components/charts/qiita-stocks.vue';

export default  {
    data() {
        return {
            graph_show: 'github'
        }
    },
    components: {
            QiitaContribChart,
            QiitaStockChart
    }
}
</script>
<style scoped lang="scss">
    #garally {
        margin: 1rem 0;
        padding: 0 3rem;
    }
</style>