import React from 'react'
import OptionListByName from '../helperComponents/OptionListByName'
import { getExchangeRate } from '../lib/utils'
import { coinTickers } from '../lib/constants'

// image credit: https://fontawesome.com/v5.15/icons/exchange-alt?style=solid
import switchIcon from '../assets/exchange-alt-solid.svg'

function ConvertCard({ inputData, inputChangeFn: handleChange }) {
  const [finalExchangeRate, setFinalExchangeRate] = React.useState({
    original: null,
    target: null,
    exchangeRate: null,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFinalExchangeRate(
      await getExchangeRate(inputData)
    )
  }

  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-background-light">
          <form className="form" onSubmit={handleSubmit}>
            <div className="columns is-vcentered">
              <div className="control column">
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
              <div className="control column is-flex-grow-0">
                <div className="select">
                  <select
                    name="original"
                    onChange={handleChange}>
                    <OptionListByName array={coinTickers} />
                  </select>
                </div>
              </div>
              <figure className="image is-24x24">
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