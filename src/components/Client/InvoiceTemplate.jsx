import { Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Tables } from "../../utils/components/index"
import { Loading, Error } from "../../utils/components"
import React from "react"
import { useParams } from "react-router-dom"
import signature from "../../assets/images/signature.png"
import BizzPassImage from "../../assets/images/bizzpass.png"
import QrCodeImg from "../../assets/images/Qr code 2.png"
import { MdOutlineCloudDownload } from "react-icons/md"
import NavHeader from "../NavHeader"
import RowNavigation from "./RowNavigation"

function InvoiceTemplate() {
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
  ]

  const columns = [
    {
      id: "product",
      label: "Product",
      isSortDisable: true,
    },
    {
      id: "quantity",
      label: "Quantity",
      isSortDisable: true,
    },
    {
      id: "unit",
      label: "Unit",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "rate",
      label: "Rate",
      isSortDisable: true,
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
    <div className="pt-5">
      <RowNavigation />
      <NavHeader
        current={{ name: "Client Profile" }}
        previous={[
          { name: "Home", link: "/clients" },
          // { name: "Clients", link: "/clients" },
        ]}
      />
      <div className="p-5 border rounded-lg mb-5">
        <div className="">
          <Typography variant="h5" component="h5">
            Invoice Detail
          </Typography>
          <div className="flex justify-between items-center">
            <img src={BizzPassImage} className="w-[200px] ml-[-1rem]" alt="logo" />
            <Typography
              variant="h6"
              component="h6"
              className={status === "Paid" ? "text-green-600" : "text-orange-600"}
            >
              {status}
            </Typography>
          </div>
          <hr />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-5">
            <Typography>
              <strong>Issue Date :</strong> 13 Apr 2023
            </Typography>
            <Typography>
              <strong>Due Date :</strong> 03 Jun 2023
            </Typography>
            <Typography>
              <strong>Invoice Number :</strong> INV 0001
            </Typography>
          </div>
          <hr />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-7">
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
          <hr />
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
          <div className="flex justify-between items-center my-5">
            <div className="">
              <p className="opacity-70">Total Amount in words:</p>
              <p className="">Three Hindered Forty Seven Dollars</p>
            </div>
            <div className="flex gap-12">
              <div>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>Taxable</Typography>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>Discount</Typography>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>Vat</Typography>
                <Typography variant="h7" sx={{ paddingBottom: "10px" }}>
                  Total Amount
                </Typography>
              </div>
              <div>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>$360.00</Typography>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>$13.20</Typography>
                <Typography sx={{ paddingBottom: "10px", opacity: "70%" }}>$0.00</Typography>
                <Typography variant="h7" sx={{ paddingBottom: "10px" }}>
                  $347.80
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-5">
            <div className=" flex justify-center items-center">
              <div>
                <ul className="w-[17rem]">
                  <li className="flex ">
                    <p className="w-1/2">Bank Name:</p>
                    <p className="font-semibold">HDFC Bank</p>
                  </li>
                  <li className="flex">
                    <p className="w-1/2">A/C No:</p>
                    <p className="font-semibold">1456214789541002</p>
                  </li>
                  <li className="flex">
                    <p className="w-1/2">IFSE Code</p>
                    <p className="font-semibold">HDFC0000</p>
                  </li>
                  <li className="flex">
                    <p className="w-1/2">Branch:</p>
                    <p className="font-semibold">Pattabiram</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <img src={QrCodeImg} alt="qrimage" />
              </div>
            </div>
            <div>
              <Typography variant="h6" component="h6" sx={{ paddingBottom: "10px" }}>
                Authorised Sign
              </Typography>
              <img src={signature} alt="signature" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 p-2 rounded-lg">
            {" "}
            <MdOutlineCloudDownload className="text-2xl" /> Downlead Invoice
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceTemplate
