function Card(props) {
  return (
    <div className={`h-[12rem] p-2 rounded-md text-center ${props.data.css} flex flex-col justify-center items-center`}>
      <img src={props.data.img} alt="img" className="max-w-full max-h-full object-contain" />
      <p className="pb-1">{props.data.name}</p>
      <p className="text-sm opacity-60">{props.data.sub}</p>
      <p className="text-xl font-semibold">{props.data.price}</p>
    </div>
  )
}

export default Card
