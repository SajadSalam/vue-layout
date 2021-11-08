export default {
    namespaced: true,
    state: {
       ...JSON.parse(localStorage.getItem('theme'))
    },
    mutations: {
        setColor(state, payload) {
            state[payload.key] = payload.value
            localStorage.setItem('theme', JSON.stringify(state))
        }
    },
    actions: {},
}
