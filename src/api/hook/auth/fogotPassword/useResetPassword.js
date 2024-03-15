import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"

export const useResetPasswordMutation = () => {
  const resetPassword = async (email, password) => {
    try {
      const response = await customAxios.post(`${auth}/login`, {
        email,
        password,
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return useMutation({
    mutationFn: resetPassword,
    mutationKey: "Reset Password",
    onSuccess: data => {
      console.log(data)
    },
  })
}
