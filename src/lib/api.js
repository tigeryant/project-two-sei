import axios from 'axios'

const baseUrl = 'https://api.coinbase.com/v2/prices'

export function getCurrencyData(ticker) {
  return axios.get(`${baseUrl}/${ticker}-USD/spot`)
}

// add function for retrieving time series data (see the test in client.http)