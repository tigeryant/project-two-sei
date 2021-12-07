function OptionListByName ({ array }) {
  return array.map((member)=>(
    <option key={member.id} value={member.id}>{member.name}</option>
  ))
}

export default OptionListByName