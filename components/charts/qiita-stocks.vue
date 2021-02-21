<template>
    <v-card min-width="80%" max-width="100%" max-height="100%">
        <v-card-title>
            Qiita Stocks
        </v-card-title>
        <v-card-text class="chart-container">
            <Chart v-if="loaded" :chartData="chartData" :options="options" height="200%" />
        </v-card-text>
    </v-card>
</template>

<script>
import Chart from './linechart.vue';
export default {
    data() {
        return {
            loaded: false,
            chartData: null,
            options: JSON.parse(JSON.stringify(this.$store.state.qiita.chartOptions)),
            height: 200
        }
    },
    async mounted() {
        this.loaded = false;
        try {
            this.chartData = {
                labels: this.$store.state.qiita.score.date,
                datasets: [{
                    label: "contributions",
                    data: this.$store.state.qiita.score.stocks,
                    fill: false,
                    borderColor: '#a3a3a3'
                }]
            }
            this.loaded = true;
        } catch(e) {
            cosole.error(e);
        }
    },
    components: {
        Chart
    }
}
</script>