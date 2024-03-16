import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"
import { toast } from "react-toastify"

export const useResetPasswordMutation = navigateFn => {
  const resetPassword = async requestBody => {
    try {
      const response = await customAxios.post(`${auth}/resetpassword`, {
        email: requestBody.email,
        password: requestBody.password,
      })
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: resetPassword,
    mutationKey: "Reset Password",
    onSuccess: data => {
      if (data.status === 200) {
        toast.success(data.data.message)
        navigateFn("/login")
      }
    },
  })
}
