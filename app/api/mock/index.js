import currencies from './data/currencies'

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
  }
}
