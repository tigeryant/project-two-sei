import { getCurrencyData } from './api'

// function that gets passed a currency pair object, 
// gets the exchange rate between each coin and USD
// calculates final exchange rate
// returns the two coin tickers and the exchange rate between them

// res.data: Object { base: "BTC", currency: "USD", amount: "51473.44" }

export async function getExchangeRate({ original, target, exchangeRate }) {
  console.log('getExchangeRate props, original:', original)
  console.log('getExchangeRate props, target:', target)
  console.log('getExchangeRate props, exchangeRate:', exchangeRate)
  // get conversion to USD for original
  const originalUSDConversion = await getCurrencyData(original).then(
    res => parseFloat(res.data.data.amount)
  )
  // get conversion to USD for target
  const targetUSDConversion = await getCurrencyData(target).then(
    res => parseFloat(res.data.data.amount)
  )

  console.log(originalUSDConversion)
  console.log(targetUSDConversion)

  // work out direct conversion rate

  const finalExchangeRate = targetUSDConversion / originalUSDConversion

  console.log(finalExchangeRate)

  return (
    {
      original: original,
      target: target,
      exchangeRate: finalExchangeRate,
    }
  )
}