<template>
    <v-card min-width="80%" max-width="100%" max-height="100%">
        <v-card-title>
            GitHub Contribution
        </v-card-title>
        <v-card-text class="chart-container">
            <div><span class="score">{{ values }}</span> Contributions</div>
        </v-card-text>
    </v-card>
</template>
<script>
import getContribution from '~/apollo/queries/getContribution.graphql';
export default {
    data() {
        return {
            contributions: {}
        };
    },

    apollo: {
        contributions: {
            query: getContribution,
            update: ({ user }) => user
        }
    },

    computed: {
        values: function(){

            const contributions_list = Object.values(this.contributions);
            let _value = 0;
            
            try {
                contributions_list.forEach(function(elm){
                    _value += elm.contributionCalendar.totalContributions;
                })
            } catch(e) {
                console.log(e.message);
            }

            return _value
        }
    }
};
</script>
<style scoped>
.score {
    font-size: 1.5rem;
}
</style>