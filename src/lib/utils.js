import { getCurrencyData, getTimeSeries } from './api'
// import time series data from api.js here

// function that gets passed a currency pair object, 
// gets the exchange rate between each coin and USD
// calculate final exchange rate
// returns the two coin tickers and the exchange rate between them

// res.data.data: Object { base: "BTC", currency: "USD", amount: "51473.44" }

export async function getExchangeRate({ original, target }) {
  // get conversion to USD for original and target
  const [originalUSDConversion, targetUSDConversion] = await Promise.all(
    [original, target].map(ticker => (
      getCurrencyData(ticker).then(res => parseFloat(res.data.data.amount))
    ))
  )

  // calculate direct conversion rate
  const finalExchangeRate = originalUSDConversion / targetUSDConversion

  return (
    {
      original: original,
      target: target,
      exchangeRate: finalExchangeRate,
    }
  )
}

// insert function for getting time series data here
// (call function from api.js)
// args: one curency = BTC
// return : [{x:time},{y:value}]
export async function getTimeSeriesData(inputData) {
  // const now = new Date()
  // console.log(now)

  const seriesOriginal = await getTimeSeries(inputData.original, '2021-12-01T12:00:00', '2021-12-07T12:00:00')
  // get second currency time series
  const seriesTarget = await getTimeSeries(inputData.target, '2021-12-01T12:00:00', '2021-12-07T12:00:00')
  // divide y by target currency value to get exchange rate at that date
  return seriesOriginal.data.map((datum, index) => {
    return {
      x: datum[0],
      y: (datum[4] / seriesTarget.data[index][4]).toPrecision(3),
    }
  })


}