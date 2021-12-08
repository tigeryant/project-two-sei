import { Link } from 'react-router-dom'

function CoinMenuList ({ array }) {
  return array.map(member =>(
    <Link className="dropdown-item" key={member.id} to={`/convert/${member.id}`}>{member.name}</Link>
  ))
}

export default CoinMenuList