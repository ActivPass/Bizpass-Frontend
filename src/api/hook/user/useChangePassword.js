import customAxios from "../../customAxios"
import { useMutation } from "@tanstack/react-query"

export const useChangePasswordMutation = () => {
  const changePassword = async changePasswordRequestObj => {
    try {
      const response = await customAxios.post(`/user/changepassword`, changePasswordRequestObj)
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: changePassword,
    mutationKey: "Change Password User",
    onSuccess: data => {
      console.log(data)
    },
  })
}
