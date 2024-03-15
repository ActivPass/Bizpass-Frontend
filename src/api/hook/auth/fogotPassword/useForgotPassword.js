import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"

export const useForgotPasswordMutation = () => {
  const forgotPassword = async email => {
    try {
      const response = await customAxios.post(`${auth}/forgotpassword`, { email })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return useMutation({
    mutationFn: forgotPassword,
    mutationKey: "Forgot Password",
    onSuccess: data => {
      console.log(data)
    },
  })
}
