import customAxios from "../../customAxios"
import { useQuery } from "@tanstack/react-query"

export const useAllBookings = () => {
  const getAllBookings = async () => {
    try {
      console.log(import.meta.env.MODE)
      const response = await customAxios.get("/slots/booking")
      return response
    } catch (err) {
      return err.response
    }
  }
  return useQuery({
    queryFn: getAllBookings,
    queryKey: ["Bookings"],
  })
}
