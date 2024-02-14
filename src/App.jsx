import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { LoginPage, Dashboard, Client, Finance, Marketing, Membership, LeaveManagement, Employee, Payroll } from "./pages"
import Layout from "./Layout"
import {
  AddClientForm,
  AddEmployeeForm,
  AddSalaryForm,
  ClientCard,
  EditClientForm,
  EditEmployeeForm,
  EditLeaveRequest,
  EmployeeCard,
  NewLeaveRequest,
  Payslip,
} from "./components"
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/addclient" element={<AddClientForm />} />
        <Route path="/editclient" element={<EditClientForm />} />
        <Route path="/clientcard" element={<ClientCard />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/addemployee" element={<AddEmployeeForm />} />
        <Route path="/employeecard" element={<EmployeeCard />} />
        <Route path="/editemployee" element={<EditEmployeeForm />} />
        <Route path="/leavemanagement" element={<LeaveManagement />} />
        <Route path="/add-leave" element={<NewLeaveRequest />} />
        <Route path="/edit-leave" element={<EditLeaveRequest />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/add-salary" element={<AddSalaryForm />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route} />
}

export default App
