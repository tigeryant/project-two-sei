import axios from 'axios'

const baseUrl = 'https://api.coinbase.com/v2/prices'
const baseUrlPro = 'https://api.pro.coinbase.com'

export function getCurrencyData(ticker) {
  return axios.get(`${baseUrl}/${ticker}-USD/spot`)
}

// add function for retrieving time series data (see the test in client.http)

export function getTimeSeries(ticker, startTime, endTime, granularity = 86400) {
  return axios.get(
    `${baseUrlPro}/products/${ticker}-USD/candles?start-${startTime}&end=${endTime}&granularity=${granularity}`
  )
}