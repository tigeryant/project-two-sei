import { Link } from 'react-router-dom'
import CoinMenuList from '../helperComponents/CoinMenuList'
import { coinTickers } from '../lib/constants'

function Nav() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/convert" className="navbar-item">
            Convert
          </Link>
          <div className="dropdown is-hoverable navbar-item">
            <div className="dropdown-trigger">
              <div>Coin Detail</div>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <CoinMenuList array={coinTickers}/>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-menu">
        </div>
      </div>
    </nav>
  )
}

export default Nav