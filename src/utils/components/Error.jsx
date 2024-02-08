/* eslint-disable react/prop-types */
const Error = ({ error, redirect, seconds }) => {
  console.log(error)
  return (
    <div className="text-red-400 font-semibold text-center">
      {redirect && `Redirecing in ${seconds} seconds..⌛`}
      <br />
      Something went wrong...
      <br />
      {error.response.data.message}
    </div>
  )
}

export default Error
