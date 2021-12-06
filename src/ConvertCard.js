function ConvertCard() {
  // state...

  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <p>convert card</p>

          {/* // form with input, two dropdowns, text and convert button */}
          <form className="form">
            <div className="columns">
              <div className="field column is-one-third">
                <div className="control">
                  <input className="input" type="text" placeholder="Amount">
                  </input>
                </div>
              </div>
              <div className="control column is-one-third">
                <div className="select">
                  <select>
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
              <div className="control column is-one-third">
                <div className="select">
                  <select>
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