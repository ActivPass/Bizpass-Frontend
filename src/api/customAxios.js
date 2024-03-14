import axios from "axios"
import baseURL from "./util/url"

const customAxios = axios.create({
  baseURL: baseURL,
})

customAxios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

customAxios.interceptors.response.use(
  response => response,
  error => {
    const status = error.response ? error.response.status : null
    if (status === 401) {
      localStorage.removeItem("token")
    } else if (status === 404) {
      console.error("Not Found")
    } else {
      console.error("Unexpected Error Occured")
    }
    return Promise.reject(error)
  }
)

export default customAxios
