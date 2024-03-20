import customAxios from "../../customAxios"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
export const useChangePasswordMutation = () => {
  const changePassword = async changePasswordRequestObj => {
    try {
      const response = await customAxios.post(`/users/changepassword`, changePasswordRequestObj)
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: changePassword,
    mutationKey: "Change Password User",
    onSuccess: data => {
      if (data?.status === 200) {
        toast.success(data.data.message)
      } else if (data?.status === 400) {
        toast.warn(data.data.message)
      } else {
        toast.error("Something unexpected happened, Please try again later")
      }
    },
    onError: () => {
      toast.error("Something unexpected happened, Please try again later")
    },
  })
}
