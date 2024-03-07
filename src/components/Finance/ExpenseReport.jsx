import { useState } from "react"
import Card from "./Card"
import { Tables } from "../../utils/components/index"
import TwelveMonthReportChart from "./TwelveMonthReportChart"
import { Loading, Error } from "../../utils/components"
import { Link } from "react-router-dom"
import { ImFilePdf } from "react-icons/im"
import NavHeader from "../NavHeader"
import { IoAnalyticsOutline } from "react-icons/io5"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { HiMiniPlusSmall, HiPencil } from "react-icons/hi2"
import EmpImg from "../../assets/images/employee.svg"
import Present from "../../assets/images/present.svg"
import Absent from "../../assets/images/absent.svg"
import Money from "../../assets/images/money.svg"
import RowNavigation from "./RowNavigation"
import { Typography, Button, TextareaAutosize } from "@mui/material"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import ImageUpload from "./ImageUpload"

const FinancialReport = () => {
  const error = false
  const isLoading = false
  const data = [
    {
      ExpenseId: "E0001",
      expenseDate: "2021-10-10",
      Reference: "#25689830",
      ClientName: "Aakash",
      totalPayables: "12000",
      status: "Paid",
      paymentMode: "Cheque",
      notes: "Excepteur occaecat cupidatat non",
    },
    {
      ExpenseId: "E0002",
      Reference: "#25689830",
      expenseDate: "2021-01-09",
      ClientName: "Krishna",
      totalPayables: "6000",
      status: "Pending",
      paymentMode: "Google Pay",
      notes: "Excepteur occaecat cupidatat non",
    },
    {
      ExpenseId: "E0003",
      Reference: "#25689830",
      expenseDate: "2021-09-01",
      ClientName: "Devan",
      totalPayables: "9000",
      status: "Unpaid",
      paymentMode: "Card",
      notes: "Excepteur occaecat cupidatat non",
    },
    {
      ExpenseId: "E0004",
      Reference: "#25689830",
      expenseDate: "2021-10-10",
      ClientName: "Stephen",
      totalPayables: "3000",
      status: "Paid",
      paymentMode: "Cheque",
      notes: "Excepteur occaecat cupidatat non",
    },
  ]

  const columns = [
    {
      id: "ExpenseId",
      label: "Expense ID",
      isSortDisable: false,
    },
    {
      id: "Reference",
      label: "Reference",
      isSortDisable: false,
      isMobileDisable: true,
    },
    {
      id: "totalPayables",
      label: "Amount",
      isSortDisable: false,
      isMobileDisable: true,
    },
    {
      id: "attachment",
      label: "Attachments",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "paymentMode",
      label: "Payment Mode",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "notes",
      label: "Notes",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "status",
      label: "Status",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "action",
      label: "Action",
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

  let Incomes = [
    {
      name: "Total Expense",
      sub: "This Month",
      price: "117,745",
      img: EmpImg,
      css: "bg-orange-50 text-orange-400",
    },
    {
      name: "Unpaid Expense",
      sub: "This Month",
      price: "54,496",
      img: Present,
      css: "bg-blue-50 text-blue-500",
    },
    {
      name: "Recurring Expenses",
      sub: "This Month",
      price: "154,496",
      img: Absent,
      css: "bg-green-50 text-green-500",
    },
  ]

  const res_data = data.map(item => {
    return {
      ...item,
      status: (
        <div className="">
          {item.status === "Paid" && (
            <span className="text-center bg-green-50 text-green-500 border border-green-500  status-span  px-2 py-1 rounded">
              Paid
            </span>
          )}
          {item.status === "Unpaid" && (
            <span className="text-center bg-red-50 text-red-500 border border-red-500 status-span px-2 py-1 rounded">
              Unpaid
            </span>
          )}
          {item.status === "Pending" && (
            <span className="text-center bg-yellow-50 text-yellow-500 border border-yellow-500 status-span px-2 py-1 rounded">
              Pending
            </span>
          )}
        </div>
      ),
      attachment: (
        <Link href="#" target="" className="text-blue-500 underline" rel="noopener noreferrer">
          <ImFilePdf className="text-2xl" />
        </Link>
      ),
      action: (
        <Popup
          trigger={
            <Button
              sx={{
                backgroundColor: "#7539FF",
                color: "white",
                ":hover": { backgroundColor: "white", color: "#7539FF" },
                border: "solid",
                borderColor: "#7539FF",
                textTransform: "none",
              }}
            >
              <HiMiniPlusSmall className="text-2xl" /> Edit
            </Button>
          }
          modal
          nested
          rounded
          {...{ contentStyle: { borderRadius: "20px", padding: "20px" } }}
        >
          {close => (
            <div>
              <div className="">
                <Typography variant="h5">Edit Expense</Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="mb-4">
                  <label htmlFor="expenseId" className="block text-sm font-medium text-gray-700">
                    Expense ID
                  </label>
                  <input
                    type="text"
                    id="expenseId"
                    name="expenseId"
                    value={item.ExpenseId}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Expense ID"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                    Reference
                  </label>
                  <input
                    type="text"
                    id="reference"
                    name="reference"
                    value={item.Reference}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Reference"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={item.totalPayables}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700">
                    Payment Mode
                  </label>
                  <input
                    type="text"
                    id="paymentMode"
                    name="paymentMode"
                    value={item.paymentMode}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Payment Mode"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="expenseDate" className="block text-sm font-medium text-gray-700">
                    Expense Date
                  </label>
                  <input
                    type="text"
                    id="expenseDate"
                    name="expenseDate"
                    value={item.expenseDate}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Expense Date"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700">
                    Payment Status
                  </label>
                  <input
                    type="text"
                    id="paymentStatus"
                    name="paymentStatus"
                    value={item.status}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Payment Status"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <TextareaAutosize
                  minRows={5}
                  id="description"
                  value={item.notes}
                  style={{
                    width: "100%",
                    border: "1px solid #cccccc",
                    marginTop: "5px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                  placeholder="Enter Description Here"
                />
              </div>
              <div className="mb-4 col-span-2">
                <ImageUpload name={"Attachment"} maxSize={50} />
              </div>
              <div className="flex justify-end gap-4">
                <Button sx={{ backgroundColor: "#EADDFF", color: "black", textTransform: "none" }} onClick={close}>
                  Cancel
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#7539FF",
                    color: "white",
                    ":hover": { backgroundColor: "white", color: "#7539FF" },
                    border: "solid",
                    borderColor: "#7539FF",
                    textTransform: "none",
                  }}
                  onClick={close}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </Popup>
      ),
    }
  })
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

  const filteredData = res_data.filter(item => item.ExpenseId.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <RowNavigation />
      <div className="px-1 sm:p-5 overflow-x-hidden">
        {/* old sub navigation */}
        {/* <div className="flex items-center mb-4">
          <p className="text-2xl font-bold">
            Finance <span className="text-3xl opacity-40"> |</span>{" "}
          </p>
          &nbsp;&nbsp;
          <Link to={"/"}>
            <FaHome className="sm:text-2xl" />
          </Link>
          &nbsp;
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <Link to={"/"} className=" text-xs sm:text-base font-semibold opacity-40">
            Home
          </Link>
          <GoChevronRight className="sm:text-xl opacity-40 " />
          <div className=" text-xs sm:text-base">Finance</div>
        </div> */}

        {/* New sub navigation*/}
        {/* <div className="flex items-center gap-10 mb-4">
          <Link to={"/"} className="text-xl flex gap-2 items-center">
            <FaHome /> Dashboard
          </Link>
          <Link to={"/income"} className="text-xl flex gap-2 items-center">
            <IoAnalyticsOutline /> Income
          </Link>
          <Link to={"/expense"} className="text-xl flex gap-2 items-center opacity-40">
            <FaRegMoneyBillAlt /> Expense
          </Link>
          <Link to={"/income"} className=" text-xl">
            Invoice
          </Link>
        </div> */}

        <NavHeader
          current={{ name: "Expense app" }}
          previous={[
            { name: "Home", link: "/" },
            { name: "Income", link: "/Income" },
            { name: "Expense", link: "/expense" },
            { name: "Invoice", link: "/Income" },
          ]}
        />
        {/* <p className="text-base font-semibold my-2">Finance</p> */}
        <div className="">
          <section className="">
            <div className="grid sm:grid-cols-3 grid-flow-row pb-6 gap-6">
              {Incomes.map(obj => {
                return <Card data={obj} key={obj.id}></Card>
              })}
            </div>
          </section>
        </div>
        <div className="my-4 flex justify-between">
          <Typography variant="h5">Expenses</Typography>
          <Popup
            trigger={
              <Button
                sx={{
                  backgroundColor: "#7539FF",
                  color: "white",
                  ":hover": { backgroundColor: "white", color: "#7539FF" },
                  border: "solid",
                  borderColor: "#7539FF",
                  textTransform: "none",
                }}
              >
                <HiMiniPlusSmall className="text-3xl" /> Add Expense
              </Button>
            }
            modal
            nested
            rounded
            {...{ contentStyle: { borderRadius: "20px", padding: "20px" } }}
          >
            {close => (
              <div>
                <div className="">
                  <Typography variant="h5">Add Expense</Typography>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div className="mb-4">
                    <label htmlFor="expenseId" className="block text-sm font-medium text-gray-700">
                      Expense ID
                    </label>
                    <input
                      type="text"
                      id="expenseId"
                      name="expenseId"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Expense ID"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                      Reference
                    </label>
                    <input
                      type="text"
                      id="reference"
                      name="reference"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Reference"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Amount
                    </label>
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Amount"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700">
                      Payment Mode
                    </label>
                    <input
                      type="text"
                      id="paymentMode"
                      name="paymentMode"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Payment Mode"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="expenseDate" className="block text-sm font-medium text-gray-700">
                      Expense Date
                    </label>
                    <input
                      type="text"
                      id="expenseDate"
                      name="expenseDate"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Expense Date"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700">
                      Payment Status
                    </label>
                    <input
                      type="text"
                      id="paymentStatus"
                      name="paymentStatus"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter Payment Status"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <TextareaAutosize
                    minRows={5}
                    id="description"
                    style={{
                      width: "100%",
                      border: "1px solid #cccccc",
                      marginTop: "5px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                    placeholder="Enter Description Here"
                  />
                </div>
                <div className="mb-4 col-span-2">
                  <ImageUpload name={"Attachment"} maxSize={50} />
                </div>
                <div className="flex justify-end gap-4">
                  <Button sx={{ backgroundColor: "#EADDFF", color: "black", textTransform: "none" }} onClick={close}>
                    Cancel
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#7539FF",
                      color: "white",
                      ":hover": { backgroundColor: "white", color: "#7539FF" },
                      border: "solid",
                      borderColor: "#7539FF",
                      textTransform: "none",
                    }}
                    onClick={close}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </Popup>
        </div>
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
    </>
  )
}

export default FinancialReport
