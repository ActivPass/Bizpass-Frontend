import { useState } from "react"
import Card from "./Card"
import { Tables } from "../../utils/components/index"
import TwelveMonthReportChart from "./TwelveMonthReportChart"
import { Loading, Error } from "../../utils/components"
import { Link } from "react-router-dom"
import { ImFilePdf } from "react-icons/im"
import { GoChevronRight } from "react-icons/go"
import { FaHome } from "react-icons/fa"

const FinancialReport = () => {
  const error = false
  const isLoading = false
  const data = [
    {
      invoiceNo: "INV0001",
      Date: "2023-01-15",
      ClientName: "Aakash",
      totalPayables: "12000",
      status: "Paid",
    },
    {
      invoiceNo: "INV0002",
      Date: "2023-05-22",
      ClientName: "Krishna",
      totalPayables: "6000",
      status: "Pending",
    },
    {
      invoiceNo: "INV0003",
      Date: "2023-09-10",
      ClientName: "Devan",
      totalPayables: "9000",
      status: "Unpaid",
    },
    {
      invoiceNo: "INV0004",
      Date: "2023-02-28",
      ClientName: "Stephen",
      totalPayables: "3000",
      status: "Paid",
    },
  ]

  const columns = [
    {
      id: "invoiceNo",
      label: "Invoice No",
      isSortDisable: false,
    },
    {
      id: "Date",
      label: "Date",
      isSortDisable: false,
      isMobileDisable: true,
    },
    {
      id: "ClientName",
      label: "Client Name",
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
      id: "status",
      label: "Status",
      isSortDisable: true,
      isMobileDisable: true,
    },
    {
      id: "invoice",
      label: "Invoice",
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
      name: "Projcted Income",
      sub: "Today",
      price: "17745",
    },
    {
      name: "Actual Income",
      sub: "Today",
      price: "54,496",
    },
    {
      name: "Monthly Income",
      sub: "This Month",
      price: "154,496",
    },
    {
      name: "Yearly Income",
      sub: "Over All",
      price: "1114,745",
    },
  ]

  const res_data = data.map(item => {
    return {
      ...item,
      status: (
        <div className="">
          {item.status === "Paid" && (
            <span className="text-center bg-green-50 text-green-500 border border-green-500  status-span  px-2 py-1 rounded">Paid</span>
          )}
          {item.status === "Unpaid" && (
            <span className="text-center bg-red-50 text-red-500 border border-red-500 status-span px-2 py-1 rounded">Unpaid</span>
          )}
          {item.status === "Pending" && (
            <span className="text-center bg-yellow-50 text-yellow-500 border border-yellow-500 status-span px-2 py-1 rounded">Pending</span>
          )}
        </div>
      ),
      invoice: (
        <Link href="#" target="" className="text-blue-500 underline" rel="noopener noreferrer">
          <ImFilePdf className="text-2xl" />
        </Link>
      ),
      action: (
        <Link href="#" target="" className=" bg-blue-500   text-white px-2 py-1 rounded" rel="noopener noreferrer">
          Pay Now
        </Link>
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

  const filteredData = res_data.filter(item => item.invoiceNo.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <div className="px-1 sm:p-5 overflow-x-hidden">
        <div className="flex items-center align-middle  mb-4">
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
        </div>
        {/* <p className="text-base font-semibold my-2">Finance</p> */}
        <div className="grid sm:grid-cols-5 sm:gap-6">
          <div className="col-span-3">
            <section className="">
              <div className="grid grid-flow-row sm:grid-cols-2 pb-6 gap-6">
                {Incomes.map(obj => {
                  return <Card data={obj} key={obj.name} />
                })}
              </div>
            </section>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <div className="h-[17.5rem]  bg-gray-200">
              <TwelveMonthReportChart />
            </div>
          </div>
        </div>
        {/* {console.log(data)} */}
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
