<template>
    <v-card width="960" height="300">
        <v-card-title>
            Qiita Contribution
        </v-card-title>
        <v-card-text class="chart-container">
            <Chart :chartData="chartData" :options="options" :height="height" />
        </v-card-text>
    </v-card>
</template>

<script>
import Chart from './linechart.vue';
export default {
    data() {
        return  {
            chartData: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [
                    {
                        label: "contribution",
                        data: [405, 483, 521, 573, 720],
                        fill: false,
                        borderColor: '#53e09c'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            },
            height: 200
        }
    },
    components: {
        Chart
    }
}
</script>