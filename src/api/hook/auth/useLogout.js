import customAxios from "../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../util/url"

export const useLogoutMutation = () => {
  const logoutUser = async () => {
    try {
      const response = await customAxios.post(`${auth}/logout`)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return useMutation({
    mutationFn: logoutUser,
    mutationKey: "Logout",
    onSuccess: () => {
      localStorage.removeItem("token")
    },
  })
}
