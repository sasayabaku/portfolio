<template>
    <div class="content">
        <v-row>
            <v-col cols="12" align="center">
                <div class="flow">
                    <div class="activity">Activity</div>
                </div>
            </v-col>
            <v-col cols="12" align="center">
                <v-row>
                <v-col cols="4" md="4" align="center">
                    <div class="card" id="github">
                        <div class="title"> 
                            GitHub
                        </div>
                        <div class="description">
                        </div>
                    </div>
                </v-col>
                <v-col cols="4" md="4" align="center"> 
                    <div class="card" id="qiita">
                        <div class="title">
                        </div>
                        <div class="description">
                        </div>
                    </div>
                </v-col> 
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .activity {
        font-size: 2rem;
        font-weight: 600;
        font-family: 'arial';
    }

    .card {
        height: 200px;
        width: 400px;
        border: 1px solid #e2e2e2;
    }
</style>