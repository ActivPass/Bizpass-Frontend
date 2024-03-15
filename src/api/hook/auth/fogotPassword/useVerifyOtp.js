import customAxios from "../../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../util/url"

export const useVerifyOtpMutation = () => {
  const verifyOtp = async (email, otp) => {
    try {
      const response = await customAxios.post(`${auth}/verifyOtp`, {
        email,
        otp,
      })
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return useMutation({
    mutationFn: verifyOtp,
    mutationKey: "Verify Otp",
    onSuccess: data => {
      console.log(data)
    },
  })
}
