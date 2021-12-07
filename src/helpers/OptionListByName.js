function OptionListByName ({ array }) {
  return array.map((coin)=>(
    <option key={coin.id} value={coin.id}>{coin.name}</option>
  ))
}

export default OptionListByName