import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import {
  LoginPage,
  Dashboard,
  Client,
  Income,
  Expense,
  Marketing,
  Membership,
  LeaveManagement,
  Employee,
  Payroll,
  WorkOutManagement,
} from "./pages"
import Layout from "./Layout"
import {
  AddClientForm,
  AddEmployeeForm,
  AddHoliday,
  AddNewLeaveType,
  AddSalaryForm,
  AddShiftForm,
  AttendanceInfo,
  ClientCard,
  EditClientForm,
  EditEmployeeForm,
  EditHoliday,
  EditLeaveRequest,
  EditLeaveTypes,
  EditShiftForm,
  EmployeeCard,
  Holidays,
  LeaveSettings,
  LeaveTypes,
  NewLeaveRequest,
  OverTime,
  OverTimeEditForm,
  OverTimeForm,
  Payslip,
  ShiftAndSchedule,
  ShiftList,
  UpgradePlan,
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
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/addemployee" element={<AddEmployeeForm />} />
        <Route path="/employeecard" element={<EmployeeCard />} />
        <Route path="/editemployee" element={<EditEmployeeForm />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/add-holiday" element={<AddHoliday />} />
        <Route path="/edit-holiday" element={<EditHoliday />} />
        <Route path="/attendance-info" element={<AttendanceInfo />} />
        <Route path="/leavemanagement" element={<LeaveManagement />} />
        <Route path="/add-leave" element={<NewLeaveRequest />} />
        <Route path="/edit-leave" element={<EditLeaveRequest />} />
        <Route path="/leave-setting" element={<LeaveSettings />} />
        <Route path="/add-leave-newtype" element={<AddNewLeaveType />} />
        <Route path="/edit-leave-type" element={<EditLeaveTypes />} />
        <Route path="/leave-types" element={<LeaveTypes />} />
        <Route path="/over-time" element={<OverTime />} />
        <Route path="/edit-overtime" element={<OverTimeEditForm />} />
        <Route path="/add-overtime" element={<OverTimeForm />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/add-salary" element={<AddSalaryForm />} />
        <Route path="/shift-schedule" element={<ShiftAndSchedule />} />
        <Route path="/add-shift" element={<AddShiftForm />} />
        <Route path="/shift-list" element={<ShiftList />} />
        <Route path="/edit-shift" element={<EditShiftForm />} />
        <Route path="/workout-management" element={<WorkOutManagement />} />
        <Route path="/upgrade" element={<UpgradePlan />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route} />
}

export default App
