<template>
    <!-- <v-card min-width="80%" max-width="100%" max-height="100%"> -->
        <div class="card">
        <v-card-title>
            Qiita Contribution
        </v-card-title>
        <v-card-text>
            <div class="sub-title">
                <span class="highlight_red">LGTM feedback</span> to my articles.
            </div>
        </v-card-text>

        <v-card-text class="chart-container">
            <div class="chart">
                <Chart v-if="loaded" :chartData="chartData" :options="options" :height="height" />
            </div>
        </v-card-text>
        </div>
    <!-- </v-card> -->
</template>

<script>
import Chart from './linechart.vue';
export default {
    data() {
        return  {
            loaded: false, 
            chartData: null,
            options: this.$store.state.qiita.chartOptions,
            height: "200%"
        }
    },
    async mounted() {
        this.loaded = false;
        try {
            this.chartData = {
                labels: this.$store.state.qiita.score.date,
                datasets: [{
                    label: "contributions",
                    data: this.$store.state.qiita.score.likes,
                    fill: false,
                    borderColor: '#e4286d',
                    radius: 0
                }]
            }
            this.loaded = true;
        } catch(e) {
            console.error(e);
        }
    },
    components: {
        Chart
    },
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

    .highlight_red {
        color: #e4286d;
    }
</style>