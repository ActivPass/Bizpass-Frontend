import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"

export const useForgotPasswordMutation = (navigateFn, resetFn) => {
  const forgotPassword = async email => {
    try {
      const response = await customAxios.post(`${auth}/forgotpassword`, { email })
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: forgotPassword,
    mutationKey: "Forgot Password",
    onSuccess: data => {
      if (data.status === 200) {
        navigateFn("/forgotpassword/verify", { state: { email: data.data.data.email } })
        resetFn()
      }
    },
  })
}
