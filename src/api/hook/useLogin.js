import customAxios from "../customAxios"
import { useMutation } from "@tanstack/react-query"
import { auth } from "../util/url"

export const useLoginMutation = (navigateFn, resetFormFn) => {
  const loginUser = async loginDataObject => {
    try {
      const response = await customAxios.post(`${auth}/login`, loginDataObject)
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
  return useMutation({
    mutationFn: loginUser,
    mutationKey: "Auth",
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data.token)
      resetFormFn()
      navigateFn("/")
    },
  })
}
