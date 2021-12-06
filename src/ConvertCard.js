import React from 'react'
import { getCurrencyData } from './lib/api'

function ConvertCard() {
  // put state of 'currency' options here
  // the state is determined by the value of the 'select' elements
  // handle change (of select)
  // handle submit

  // const [currencyPair, setCurrencyPair] = React.useState({
  //   original: null,
  //   target: null,
  // })

  const handleChange = (e) => {
    // setCurrencyPair({
    //   // 
    // })
    console.log(e.target.name)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await getCurrencyData()
  }


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
                    {/* {map coin pairs} */}
                  </select>
                </div>
              </div>
              <div className="control column">
                <div className="select">
                  <select
                    name="target"
                    onChange={handleChange}>
                      {/* {map coin pairs} */}
                    <option>Bitcoin</option>
                    <option>Ethereum</option>
                    <option>Binance Coin</option>
                    <option>Solana</option>
                    <option>Cardano</option>
                    <option>XRP</option>
                    <option>Polkadot</option>
                    <option>Terra</option>
                    <option>Dogecoin</option>
                    <option>Avalanche</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="control">
              <button className="button is-primary">Convert</button>
            </div>
          </form>
          <p>1 Bitcoin = 10 Ethereum</p>
        </div>
      </div>
    </section>
  )
}

export default ConvertCard