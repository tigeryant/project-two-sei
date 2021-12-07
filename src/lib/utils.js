import { getCurrencyData } from './api'

// function that gets passed a currency pair object, 
// gets the exchange rate between each coin and USD
// calculate final exchange rate
// returns the two coin tickers and the exchange rate between them

// res.data.data: Object { base: "BTC", currency: "USD", amount: "51473.44" }

export async function getExchangeRate({ original, target }) {
  // get conversion to USD for original
  const originalUSDConversion = await getCurrencyData(original).then(
    res => parseFloat(res.data.data.amount)
  )
  // get conversion to USD for target
  const targetUSDConversion = await getCurrencyData(target).then(
    res => parseFloat(res.data.data.amount)
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