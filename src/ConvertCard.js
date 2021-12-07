import React from 'react'
import OptionListByName from './helperComponents/OptionListByName'
import { getExchangeRate } from './lib/utils'
import { coinTickers } from './lib/constants'

function ConvertCard() {
  // put state of 'currency' options here
  // the state is determined by the value of the 'select' elements
  // handle change (of select)
  // handle submit

  const [currencyPair, setCurrencyPair] = React.useState({
    original: coinTickers[0].id,
    target: coinTickers[0].id,
  })
  const [finalExchangeRate, setFinalExchangeRate] = React.useState({
    original: null,
    target: null,
    exchangeRate: null,
  })

  const handleChange = (e) => {
    setCurrencyPair({
      ...currencyPair, [e.target.name]: e.target.value,
    })
    // console.log(e.target.name)
    // console.log(e.target)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFinalExchangeRate(
      await getExchangeRate(currencyPair)
    )
  }

  console.log(JSON.stringify(finalExchangeRate, null, 2))
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <p>convert card</p>

          {/* // form with input, two dropdowns, text and convert button */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="columns">
              <div className="field column is-one-third">
                <div className="control">
                  <input className="input" type="number" placeholder="Amount">
                  </input>
                </div>
              </div>
              <div className="control column">
                <div className="select">
                  <select
                    name="original"
                    onChange={handleChange}>
                    <OptionListByName array={coinTickers} />
                  </select>
                </div>
              </div>
              <div className="control column">
                <div className="select">
                  <select
                    name="target"
                    onChange={handleChange}>
                    <OptionListByName array={coinTickers} />
                  </select>
                </div>
              </div>
            </div>
            <div>
              {
                finalExchangeRate.original && (
                  <p>  {'entered value'} {finalExchangeRate.original} = {'entered value' + '*' + 'exchangeRate'} {finalExchangeRate.target}</p>
                )
              }
              <div className="control">
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