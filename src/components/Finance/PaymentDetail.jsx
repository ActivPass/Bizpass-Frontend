import { Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { ImFilePdf } from "react-icons/im"
import { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Loading, Error } from "../../utils/components"
import React from "react"
import { useParams } from "react-router-dom"
import { FiFileText } from "react-icons/fi"
import signature from "../../assets/images/signature.png"

function PaymentDetail() {
  const { status } = useParams()
  const error = false
  const isLoading = false
  const data = [
    {
      product: "Nike Jordan",
      quantity: 10,
      unit: "Piece",
      rate: 15.99,
      discount: 5,
      tax: 2.5,
      amount: 149.45,
    },
    {
      product: "Lobar Handy",
      quantity: 5,
      unit: "Pack",
      rate: 24.99,
      discount: 2,
      tax: 1.2,
      amount: 117.43,
    },
    {
      product: "Bold V3.2",
      quantity: 8,
      unit: "Box",
      rate: 19.99,
      discount: 3,
      tax: 1.8,
      amount: 147.54,
    },
    {
      product: "Addidas 3.0",
      quantity: 15,
      unit: "Piece",
      rate: 12.49,
      discount: 1.5,
      tax: 0.9,
      amount: 181.32,
    },
  ]

  const columns = [
    {
      id: "product",
      label: "Product",
      isSortDisable: false,
    },
    {
      id: "quantity",
      label: "Quantity",
      isSortDisable: false,
    },
    {
      id: "unit",
      label: "Unit",
      isSortDisable: false,
      isMobileDisable: true,
    },
    {
      id: "rate",
      label: "Rate",
      isSortDisable: false,
      isMobileDisable: true,
    },
    {
      id: "discount",
      label: "Discount",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "tax",
      label: "Tax",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "amount",
      label: "Amount",
      isSortDisable: true,
      isMobileDisable: true,
    },
  ]

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  // const res_data = data.map(item => {
  //   return {
  //     ...item,
  //     status: (
  //       <div className="">
  //         {item.status === "Paid" && (
  //           <span className="text-center bg-green-50 text-green-500 border border-green-500  status-span  px-2 py-1 rounded">
  //             Paid
  //           </span>
  //         )}
  //         {item.status === "Unpaid" && (
  //           <span className="text-center bg-red-50 text-red-500 border border-red-500 status-span px-2 py-1 rounded">
  //             Unpaid
  //           </span>
  //         )}
  //         {item.status === "Pending" && (
  //           <span className="text-center bg-yellow-50 text-yellow-500 border border-yellow-500 status-span px-2 py-1 rounded">
  //             Pending
  //           </span>
  //         )}
  //       </div>
  //     ),
  //     invoice: (
  //       <Link href="#" target="" className="text-blue-500 underline" rel="noopener noreferrer">
  //         <ImFilePdf className="text-2xl" />
  //       </Link>
  //     ),
  //     action: (
  //       <div>
  //         {item.status === "Paid" && (
  //           <Button
  //             sx={{
  //               backgroundColor: "#7539FF",
  //               color: "white",
  //               ":hover": { backgroundColor: "white", color: "#7539FF" },
  //               border: "solid",
  //               borderColor: "#7539FF",
  //               textTransform: "none",
  //               width: "80%",
  //             }}
  //             href={"/paymentDetail/" + item.status}
  //           >
  //             View
  //           </Button>
  //         )}
  //         {(item.status === "Unpaid" || item.status === "Pending") && (
  //           <Button
  //             sx={{
  //               backgroundColor: "#7539FF",
  //               color: "white",
  //               ":hover": { backgroundColor: "white", color: "#7539FF" },
  //               border: "solid",
  //               borderColor: "#7539FF",
  //               textTransform: "none",
  //               width: "80%",
  //             }}
  //             href={"/paymentDetail/" + item.status}
  //           >
  //             Pay Now
  //           </Button>
  //         )}
  //       </div>
  //     ),
  //   }
  // })
  //pagination data

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  //filter data

  const [filter, setFilter] = useState("")

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  const filteredData = data.filter(item => item.product.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="bg-[#F7F8F9] p-4">
      <div className="p-4 bg-white rounded-lg">
        <div className="flex justify-between">
          <Typography variant="h5" component="h5">
            Invoice Detail
          </Typography>
          <Typography variant="h6" component="h6" className={status === "Paid" ? "text-green-400" : "text-orange-400"}>
            {status}
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
          <Typography>Issue Date : 13 Apr 2023</Typography>
          <Typography>Due Date : 03 Jun 2023</Typography>
          <Typography>Invoice Number : INV 0001</Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pb-10">
          <div>
            <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
              Invoiced To:
            </Typography>
            <Typography>John Doe</Typography>
            <Typography>123 Main Street</Typography>
            <Typography>Springfield, IL 62701</Typography>
            <Typography>United States</Typography>
          </div>
          <div>
            <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
              Pay To:
            </Typography>
            <Typography>walter Roberson</Typography>
            <Typography>123 Main Street</Typography>
            <Typography>Springfield, IL 62701</Typography>
            <Typography>United States</Typography>
          </div>
          <div>
            <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
              Payment Details:
            </Typography>
            <Typography>Paypal : examplepaypal.co</Typography>
            <Typography>Account : examplebank.co</Typography>
            <Typography>Payment Term : 15 days</Typography>
            {status != "Paid" && (
              <Button
                sx={{
                  backgroundColor: "#7539FF",
                  color: "white",
                  ":hover": { backgroundColor: "white", color: "#7539FF" },
                  border: "solid",
                  borderColor: "#7539FF",
                  textTransform: "none",
                  width: "80%",
                  marginTop: "10px",
                }}
              >
                Pay Now
              </Button>
            )}
          </div>
        </div>

        <div>
          <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
            {" "}
            Items :{" "}
          </Typography>
          <Tables
            columns={columns}
            data={data}
            filter={filter}
            filteredData={filteredData}
            handleFilterChange={handleFilterChange}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleChangePage={handleChangePage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </div>

        <div className="flex justify-between">
          <div>
            <div className="flex justify-start gap-5 items-center">
              <FiFileText className="text-4xl" />
              <div>
                <Typography>Terms & Conditions</Typography>
                <Typography sx={{ color: "#878A99" }} variant="subtitle2">
                  Authoritatively envisioneer business action items through parallel sources.
                </Typography>
              </div>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <FiFileText className="text-4xl" />
              <div>
                <Typography>Note</Typography>
                <Typography sx={{ color: "#878A99" }} variant="subtitle2">
                  This is computer generated receipt and does not require physical signature.
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>Taxable</Typography>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>Discount</Typography>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>Vat</Typography>
            <Typography variant="h7" sx={{ paddingBottom: "10px" }}>
              Total Amount
            </Typography>
          </div>
          <div>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>$360.00</Typography>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>$13.20</Typography>
            <Typography sx={{ paddingBottom: "10px", color: "#878A99" }}>$0.00</Typography>
            <Typography variant="h7" sx={{ paddingBottom: "10px" }}>
              $347.80
            </Typography>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <div>
            <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
              Authorised Sign
            </Typography>
            <img src={signature} alt="signature" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetail
