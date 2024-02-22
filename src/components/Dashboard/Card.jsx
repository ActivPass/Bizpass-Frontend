function Card(props) {
  return (
    <>
      <div className={`h-28 sm:h-auto md:h-28 p-2 rounded-md ${props.data.css}`} >
        <p className="pb-1">{props.data.name}</p>
        <p className="text-sm opacity-60">{props.data.sub}</p>
        <p className="text-xl font-semibold">{props.data.price}</p>
      </div>
    </>
  )
}

export default Card
