import customAxios from "../../customAxios"
import { useQuery } from "@tanstack/react-query"

export const useAllBookings = () => {
  const getAllBookings = async () => {
    try {
      const response = await customAxios.post("/slots/booking")
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
