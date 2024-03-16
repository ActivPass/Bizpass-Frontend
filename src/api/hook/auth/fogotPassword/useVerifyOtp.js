import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"

export const useVerifyOtpMutation = navigateFn => {
  const verifyOtp = async requestBody => {
    try {
      const response = await customAxios.post(`${auth}/verifyOtp`, {
        email: requestBody.email,
        otp: requestBody.otp,
      })
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: verifyOtp,
    mutationKey: "Verify Otp",
    onSuccess: data => {
      console.log(data)
      if (data?.status === 200) {
        navigateFn("/forgotpassword/changepassword", { state: { email: data.data.data.email } })
      }
    },
  })
}
