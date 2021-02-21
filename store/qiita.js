export const state = () => ({
    score: {
        date: null,
        likes: null,
        stocks: null,
        views: null
    },
    chartOptions: {
        reponsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
             ticks: {
                 stepSize: 1
             }   
            }]
        },
        height: 200
    }
})

export const mutations = {
    setDate(state,date) {
        state.score.date = date;
    },
    setLikes(state, likes) {
        state.score.likes = likes;
    },
    setStocks(state, stocks) {
        state.score.stocks = stocks;
    },
    setViews(state, views) {
        state.score.views = views;
    }
}