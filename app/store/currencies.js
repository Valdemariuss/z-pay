import client from 'api-client'

export const state = () => ({
  list: []
})

export const mutations = {
  setCurrencies(state, currencies) {
    state.list = currencies
  }
}

export const actions = {
  fetchCurrencies({ commit }) {
    return client
      .fetchCurrencies()
      .then(currencies => commit('setCurrencies', currencies))
  }
}
