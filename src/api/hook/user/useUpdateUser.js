import customAxios from "../../customAxios"
import { useMutation } from "@tanstack/react-query"

export const useUpdateUserMutation = () => {
  const patchUpdateUser = async updateRequestObj => {
    try {
      const response = await customAxios.patch(`/user`, updateRequestObj)
      return response
    } catch (err) {
      return err.response
    }
  }
  return useMutation({
    mutationFn: patchUpdateUser,
    mutationKey: "Patch Update User",
    onSuccess: data => {
      localStorage.setItem("token", data?.data?.token)
    },
  })
}
