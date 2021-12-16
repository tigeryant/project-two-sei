import { useParams } from 'react-router'
import TimeSeries from './TimeSeries'

function CoinDetail(){
  const { ticker } = useParams()
  const inputData = {
    original: ticker,
    target: ticker,
    amountForConversion: 1,
  }
  const comparison1 = { ...inputData, target: 'BTC' }
  const comparison2 = { ...inputData, target: 'ETH' }
  const comparison3 = { ...inputData, target: 'DOGE' }
  return (
    <>
      <TimeSeries inputData={comparison1} />
      <TimeSeries inputData={comparison2} />
      <TimeSeries inputData={comparison3} />
    </>
  )
}

export default CoinDetail