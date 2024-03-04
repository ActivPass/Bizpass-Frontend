import { useState } from "react"
import { Button, Switch, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ImFilePdf } from "react-icons/im"
import { Tables } from "../../utils/components/index"
import { FaPlusCircle } from "react-icons/fa"

function BankSettings() {
  const error = false
  const isLoading = false
  const data = [
    {
      name: "VAT@10%",
      taxRate: "10.00",
      status: true,
    },
    {
      name: "GST@10",
      taxRate: "10.00",
      status: false,
    },
    {
      name: "VAT@5%",
      taxRate: "5.00",
      status: true,
    },
    {
      name: "GST@5",
      taxRate: "5.00",
      status: false,
    },
  ]

  const columns = [
    {
      id: "Sno",
      label: "S.No",
      isSortDisable: false,
    },
    {
      id: "name",
      label: "Name",
      isSortDisable: false,
    },
    {
      id: "taxRate",
      label: "Tax Rate",
      isSortDisable: false,
    },
    {
      id: "status",
      label: "Status",
      isSortDisable: false,
      isMobileDisable: true,
    },
  ]

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const res_data = data.map((item, index) => {
    return {
      ...item,
      Sno: <div>{index + 1}</div>,
      status: <Switch checked={item.status} />,
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

  const filteredData = res_data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="bg-white rounded-lg w-[70%] p-8">
      <div className="flex justify-between">
        <Typography variant="h5">Bank Settings</Typography>
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
          <span className="pr-2">
            <FaPlusCircle />
          </span>
          Add Tax
        </Button>
      </div>
      <div>
        <div>
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
      </div>
      <div className="flex justify-end gap-4 pt-8">
        <Button sx={{ backgroundColor: "#EADDFF", color: "black", textTransform: "none" }}>Cancel</Button>
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
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default BankSettings
