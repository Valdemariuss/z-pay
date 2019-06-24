import axios from 'axios'

export default {
  fetchCurrencies() {
    return axios
      .get('https://backend.z-pay.io/v1/payments/currencies')
      .then(response => response.data)
  }
}
