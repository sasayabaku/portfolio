export const state = () => ({
    text: 'hello Vuex'
})

export const mutations  = {
    change(state, text) {
        state.text = text
    }
}