import React from 'react'
import TimeSeries from './displays/TimeSeries'
import ConvertCard from './displays/ConvertCard'
import { coinTickers } from './lib/constants'

function Convert() {
  const [inputData, setInputData] = React.useState({
    original: coinTickers[0].id,
    target: coinTickers[0].id,
    amountForConversion: 0,
  })
  const handleInputChange = (e) => {
    setInputData({
      ...inputData, [e.target.name]: e.target.value,
    })
  }


  return (
    <>
      <ConvertCard
        inputData={inputData}
        inputChangeFn={handleInputChange}
      />
      <TimeSeries 
        inputData={inputData}
      />
    </>
  )
}

export default Convert