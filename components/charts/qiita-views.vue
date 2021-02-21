<template>
    <v-card min-width="80%" max-width="100%" max-height="100%">
        <v-card-title>
            Qiita Views
        </v-card-title>
        <v-card-text class="chart-container">
            <Chart v-if="loaded" :chartData="chartData" :options="options" height="200%"/>
        </v-card-text>
    </v-card>
</template>

<script>
import Chart from "./linechart.vue";
export default {
    data() {
        return {
            loaded: false,
            chartData: null,
            options: JSON.parse(JSON.stringify(this.$store.state.qiita.chartOptions)),
        }
    },
    async mounted() {
        this.loaded = false;
        try {
            this.chartData = {
                labels: this.$store.state.qiita.score.date,
                datasets: [{
                    label: "views",
                    data: this.$store.state.qiita.score.views,
                    fill: false,
                    borderColor: '#521E88'
                }]
            }
            this.loaded = true;
        } catch(e) {
            console.error(e);
        }

        this.options.scales.yAxes[0].ticks.stepSize = 1000;
    },
    components: {
        Chart
    }
}
</script>