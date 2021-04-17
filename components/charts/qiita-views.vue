<template>
    <!-- <v-card min-width="80%" max-width="100%" max-height="100%"> -->
    <div class="card">
        <v-card-title>
            Qiita Views
        </v-card-title>

        <v-card-text>
            <div class="sub-title">
                <span class="highlight_green">Views</span> of my articles.
            </div>
        </v-card-text>

        <v-card-text class="chart-container">
            <Chart v-if="loaded" :chartData="chartData" :options="options" height="200%"/>
        </v-card-text>
    </div>
    <!-- </v-card> -->
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
                    borderColor: '#0DA706',
                    radius: 0
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

<style lang="scss" scoped>

    .card {
        display: block;
        position: relative;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 1px 1px 30px rgba($color: #000, $alpha: 0.2);
        background-color: rgba($color:  #fff, $alpha: 0.2);
    }

    .sub-title {
        font-size: 1.1em;
    }

    .highlight_green {
        color: #0DA706;
    }
</style>