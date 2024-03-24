let baseUrl
if (import.meta.env.MODE === "development") {
  baseUrl = "http://localhost:5000/api/v1"
} else {
  baseUrl = "https://bizpass-server-dev.onrender.com/api/v1"
}

const auth = "/auth"

export { auth }
export default baseUrl
