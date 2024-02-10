import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { LoginPage, Dashboard, Client, Finance, Marketing, Membership, LeaveManagement } from "./pages"
import Layout from "./Layout"
import { AddEmployeeForm } from "./components"
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/leavemanage" element={<LeaveManagement />} />
        <Route path="/addemployee" element={<AddEmployeeForm/>} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route} />
}

export default App
