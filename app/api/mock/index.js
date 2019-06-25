import currencies from './data/currencies'
import rates from './data/rates'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchCurrencies() {
    return fetch(currencies, 1000)
  },
  fetchRates() {
    return fetch(rates, 2000)
  }
}
