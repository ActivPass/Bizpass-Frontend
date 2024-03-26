import NavHeader from "../NavHeader"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

function createData(name, price, id) {
  return { name, price, id }
}

export default function MembershipManagement() {
  const [rows, setRows] = useState([createData("Basic", 299, 1), createData("Standard", 599, 2)])
  const [deleteModal, setDeleteModal] = useState(false)
  const handlePlanDelete = id => {
    setRows(rows.filter(row => row.id !== id))
  }
  return (
    <div className="p-1 md:p-5">
      <NavHeader
        current={{ name: "Add Client" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Clients", link: "/clients" },
          { name: "Manage Client Membership", link: "/clients/memberships/manage" },
        ]}
      />
      <div className="w-full flex items-center justify-end py-4">
        <button className="btn btn-info text-white">Add Plan</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plan Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Update Plan</TableCell>
              <TableCell align="center">Delete Plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.price}
                </TableCell>
                <TableCell align="center">
                  {
                    <button className="btn btn-square btn-info">
                      <AiFillEdit color="white" />
                    </button>
                  }
                </TableCell>
                <TableCell align="center">
                  {
                    <>
                      <button className="btn btn-square btn-error" onClick={() => setDeleteModal(true)}>
                        <RiDeleteBinLine color="white" />
                      </button>
                    </>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDialog
        rows={rows}
        open={deleteModal}
        setDeleteModal={setDeleteModal}
        handlePlanDelete={handlePlanDelete}
      />
    </div>
  )
}

function CustomDialog({ deleteModal, setDeleteModal, handlePlanDelete }) {
  return (
    <Dialog
      open={deleteModal}
      onClose={() => setDeleteModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="p-4">
        <DialogTitle id="alert-dialog-title" className="font-semibold">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogActions>
          <button className="btn btn-error text-white" onClick={() => setDeleteModal(false)}>
            Disagree
          </button>
          <button
            className="btn btn-success text-white"
            onClick={() => {
              setDeleteModal(false)
              handlePlanDelete()
            }}
            autoFocus
          >
            Agree
          </button>
        </DialogActions>
      </div>
    </Dialog>
  )
}
