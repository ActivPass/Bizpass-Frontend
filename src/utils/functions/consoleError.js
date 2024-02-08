export default function generateError(err) {
  const errorObj = {
    code: err.code,
    message: err.message,
    name: err.name,
    data: err.response.data,
  }
  console.log(errorObj)
  return
}
