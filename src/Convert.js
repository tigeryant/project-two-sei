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
  const handleChange = (e) => {
    setInputData({
      ...inputData, [e.target.name]: e.target.value,
    })
    // console.log(e.target.name)
    // console.log(e.target)
    console.log(e.target.value)
  }


  return (
    <>
      <ConvertCard
        inputData={inputData}
        inputChangeFn={handleChange}
      />
      <TimeSeries 
        inputData={inputData}
      />
    </>
  )
}

export default Convert