import customAxios from "../../customAxios"
import { useQuery } from "@tanstack/react-query"

export const useAllBookings = () => {
  const getAllBookings = async () => {
    try {
      const response = await customAxios.get("/slots/booking", {
        params: {
          orgId: "65ff0f386b5f75c1b871381a",
          facilityId: "6600f452deb0ee12e85f8a70",
        },
      })

      console.log(response)
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
