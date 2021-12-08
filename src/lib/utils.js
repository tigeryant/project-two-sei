import dayjs from 'dayjs'
import { getCurrencyData, getTimeSeries } from './api'

export async function getExchangeRate({ original, target }) {
  // get conversion to USD for original and target
  const [originalUSDConversion, targetUSDConversion] = await Promise.all(
    [original, target].map(ticker => (
      getCurrencyData(ticker).then(res => parseFloat(res.data.data.amount))
    ))
  )

  // calculate direct conversion rate
  const finalExchangeRate = originalUSDConversion / targetUSDConversion

  // returning both currencies together with their exchange rate
  return (
    {
      original: original,
      target: target,
      exchangeRate: finalExchangeRate,
    }
  )
}

export async function getTimeSeriesData(inputData, startDaysAgo = 30) {
  //todo: make dates dynamic
  const today = dayjs().format('YYYY-MM-DD')
  const startDay = dayjs().add(-startDaysAgo, 'day').format('YYYY-MM-DD')


  const seriesOriginal = await getTimeSeries(inputData.original, `${startDay}T12:00:00`, `${today}T12:00:00`)
  const seriesTarget = await getTimeSeries(inputData.target, `${startDay}T12:00:00`, `${today}T12:00:00`)

  return seriesOriginal.data.map((datum, index) => {
    let yValue = 0

    if (seriesTarget.data[index]) {
      yValue = (datum[4] / seriesTarget.data[index][4]).toPrecision(4)
    }

    return {
      x: datum[0],
      y: yValue,
    }
  })


}