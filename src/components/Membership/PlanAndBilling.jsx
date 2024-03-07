import { Typography, Button } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import { Tables } from "../../utils/components/index"
import { IoMdDownload } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const columns = [
  {
    id: "sNo",
    label: "S.No",
    isSortDisable: false,
  },
  {
    id: "name",
    label: "Name",
    isSortDisable: false,
  },
  {
    id: "date",
    label: "Date",
    isSortDisable: false,
  },
  {
    id: "status",
    label: "Status",
    isSortDisable: false,
  },
  {
    id: "action",
    label: "Action",
    isSortDisable: true,
  },
]

const data = [
  {
    date: "13 Aug 2023",
    name: "Basic",
    status: "$199.50",
  },
  {
    date: "13 Aug 2023",
    name: "Pro",
    status: "$149.50",
  },
  {
    date: "13 Aug 2023",
    name: "Premium",
    status: "$249.50",
  },
  {
    date: "13 Aug 2023",
    name: "Basic",
    status: "$49.50",
  },
]

const res_data = data.map((item, index) => {
  return {
    ...item,
    sNo: <div>{index + 1}</div>,
    action: (
      <button className="btn">
        <IoMdDownload />
      </button>
    ),
  }
})

const PlanAndBilling = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const [filter, setFilter] = useState("")
  const handleFilterChange = event => {
    setFilter(event.target.value)
  }
  const filteredData = res_data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div className="bg-white rounded-lg w-[70%] p-8">
      <Typography variant="h5">Plan And Billing</Typography>
      <section className="w-full py-4">
        <Swiper
          // install Swiper modules
          draggable
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          parallax
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Plan name="Basic" price={49} period="Monthly" daysLeft={30} isSubscribed={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Plan name="Pro" price={149} period="Monthly" daysLeft={30} isSubscribed={false} />
          </SwiperSlide>
          <SwiperSlide>
            <Plan name="Premium" price={249} period="Monthly" daysLeft={30} isSubscribed={false} />
          </SwiperSlide>
        </Swiper>
      </section>
      <Tables
        columns={columns}
        data={res_data}
        filter={filter}
        filteredData={filteredData}
        handleFilterChange={handleFilterChange}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </div>
  )
}

function Plan({ name, price, period, daysLeft, isSubscribed }) {
  const navigate = useNavigate()
  const [detailsPopupOpen, setdetailsPopupOpen] = useState(false)
  const [cancelDialogPopupOpen, setCancelDialogPopupOpen] = useState(false)

  return (
    <div
      className={`flex justify-between p-4 border-2 border-gray-500 rounded-md cursor-grab ${
        isSubscribed && "bg-purple-100"
      } `}
    >
      <div className="flex flex-col justify-between gap-2">
        <div>
          <h1 className="text-blue-500 text-lg font-medium">{name}</h1>
          <p className="text-sm text-gray-600">{daysLeft}days Remaining</p>
        </div>
        <button
          className="text-blue-400  btn btn-ghost btn-sm font-medium"
          onClick={() => {
            if (isSubscribed) {
              setCancelDialogPopupOpen(true)
            } else {
              navigate("/upgrade")
            }
          }}
        >
          {isSubscribed ? "Unsubscribe" : "Upgrade"}
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-lg">${price}</h3>
          <p className="text-gray-700 text-xs">{period}</p>
        </div>
        <div>
          <Button
            variant="text"
            size="small"
            className="text-blue-400 font-medium"
            onClick={() => setdetailsPopupOpen(true)}
          >
            Details
          </Button>
        </div>
      </div>
      <Dialog
        open={detailsPopupOpen}
        onClose={() => setdetailsPopupOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-4 rounded-md">
          <div className="border-2 border-gray-500 p-4 rounded-md">
            <div className="pb-4">
              <h1 className="text-blue-500 text-lg font-medium">{name}</h1>
              <p className="text-sm text-gray-600">{daysLeft}days Remaining</p>
            </div>
            <h3 className="font-medium text-lg">${price}</h3>
            <p className="text-gray-700 text-xs">{period}</p>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={cancelDialogPopupOpen}
        onClose={() => setCancelDialogPopupOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-8 rounded-lg flex flex-col justify-center items-center gap-4">
          <h2 className="text-lg ">Are you sure want to cancel?</h2>
          <div className="flex gap-4 ">
            <button className="btn btn-info text-white font-semibold" onClick={() => setCancelDialogPopupOpen(false)}>
              Return
            </button>
            <button
              className="btn btn-error text-white font-semibold"
              onClick={() => {
                alert("Membership Cancelled")
                setCancelDialogPopupOpen(false)
              }}
            >
              Yes, Cancel
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default PlanAndBilling
