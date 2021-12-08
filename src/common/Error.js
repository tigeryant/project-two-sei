function Error({ errorDetailString = '' }){
  return (
    <div className="has-text-centered">
      <h4>Sorry, we&apos;ve encountered an error.</h4>
      <h4>{errorDetailString}</h4>
      <h4>Please change your inputs or try again later.</h4>
    </div>
  )
}

export default Error