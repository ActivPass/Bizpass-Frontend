function Card(props) {
  return (
    <>
      <div className="h-[8rem]  p-2 border border-gray-100 rounded-md bg-gray-200">
        <p className=" text-base  pb-1 font-bold">{props.data.name}</p>
        <p className="text-sm opacity-60">{props.data.sub}</p>
        <p className="text-base font-semibold pt-6 ml-48">RS:{props.data.price}</p>
      </div>
    </>
  )
}

export default Card
