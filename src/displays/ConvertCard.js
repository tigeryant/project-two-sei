import React from 'react'
import OptionListByName from '../helperComponents/OptionListByName'
import { getExchangeRate } from '../lib/utils'
import { coinTickers } from '../lib/constants'

// image credit: https://www.svgrepo.com/svg/215706/arrows-switch
import switchIcon from '../assets/arrows-switch-svgrepo-com.svg'

function ConvertCard() {
  // put state of 'currency' options here
  // the state is determined by the value of the 'select' elements
  // handle change (of select)
  // handle submit

  const [inputData, setCurrencyPair] = React.useState({
    original: coinTickers[0].id,
    target: coinTickers[0].id,
    amountForConversion: 0,
  })
  const [finalExchangeRate, setFinalExchangeRate] = React.useState({
    original: null,
    target: null,
    exchangeRate: null,
  })

  const handleChange = (e) => {
    setCurrencyPair({
      ...inputData, [e.target.name]: e.target.value,
    })
    // console.log(e.target.name)
    // console.log(e.target)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFinalExchangeRate(
      await getExchangeRate(inputData)
    )
  }

  console.log(JSON.stringify(finalExchangeRate, null, 2))
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-background-light">
          {/* // form with input, two dropdowns, text and convert button */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="columns is-vcentered">
              <div className="field column">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Amount"
                    onChange={handleChange}
                    name='amountForConversion'
                    value={inputData.amountForConversion}
                  >
                  </input>
                </div>
              </div>
              <div className="control column is-flex-grow-0">
                <div className="select">
                  <select
                    name="original"
                    onChange={handleChange}>
                    <OptionListByName array={coinTickers} />
                  </select>
                </div>
              </div>
              <figure className="image is-32x32">
                <img src={switchIcon} alt="to" />
              </figure>
              <div className="control column is-flex-grow-0">
                <div className="select">
                  <select
                    name="target"
                    onChange={handleChange}>
                    <OptionListByName array={coinTickers} />
                  </select>
                </div>
              </div>
            </div>
            <div className="columns p-4">
              {
                finalExchangeRate.original && (
                  <div>
                    <p className="has-text-right"> {`${inputData.amountForConversion} ${finalExchangeRate.original}`}
                    </p>
                    <p className="has-text-centered">=</p>
                    <p className="has-text-right">{
                      (inputData.amountForConversion * finalExchangeRate.exchangeRate).toFixed(10)
                    } {finalExchangeRate.target}
                    </p>
                  </div>
                )
              }
              <div className="control has-margin-left-auto">
                <button className="button is-primary">Convert</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConvertCard