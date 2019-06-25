import client from 'api-client'

export const state = () => ({
  currencies: [],
  rates: {}
})

export const mutations = {
  setCurrencies(state, currencies) {
    state.currencies = currencies
  },
  setRates(state, rates) {
    state.rates = rates
  }
}

export const actions = {
  fetchCurrencies({ commit }) {
    return client
      .fetchCurrencies()
      .then(currencies => commit('setCurrencies', currencies))
  },
  fetchRates({ commit }) {
    return client
      .fetchRates()
      .then(rates => commit('setRates', rates))
  }
}
