function Card(props) {
  return (
    <>
      <div
        className={`h-[10rem] sm:h-auto md:h-[10rem] md:w-[10rem] p-2 rounded-md flex flex-col justify-center items-center ${props.data.css}`}
      >
        <p className="pb-1">{props.data.name}</p>
        <p className="text-sm opacity-60">{props.data.sub}</p>
        <p className="text-xl font-semibold">{props.data.price}</p>
      </div>
    </>
  )
}

export default Card
