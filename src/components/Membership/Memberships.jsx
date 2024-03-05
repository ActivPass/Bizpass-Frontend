import React, { useState } from "react"
import { Link } from "react-router-dom"
import PieChart from "./PieChart"
import { Button } from "@mui/material"
import { FaHome } from "react-icons/fa"
import NavHeader from "../NavHeader"
import { GoChevronRight } from "react-icons/go"
import CompanySettings from "./CompanySettings"
import SideMenu from "./SideMenu"
import InvoiceSettings from "./InvoiceSettings"
import InvoiceTemplates from "./InvoiceTemplates"
import BankSettings from "./BankSettings"
import TaxRates from "./TaxRates"
import PaymentMethods from "./PaymentMethods"
import RowNavigation from "./RowNavigation"

const Memberships = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("") // Default selected menu item

  // const user = {
  //   partnerName: "Wolf Fitness Center",
  //   name: "Sakthi Pandiyan",
  //   team: "Team Wolf",
  //   email: "pandi@gmail.com",
  //   phone: "6381458872",
  //   status: "Active",
  // }

  // const toggleStatus = () => {
  //   setUser(prevUser => ({
  //     ...prevUser,
  //     status: prevUser.status === "Active" ? "Inactive" : "Active",
  //   }))
  // }

  // const handlePayNow = () => {
  //   alert("Payment initiated for user:" + user.name)
  // }

  const renderSelectedComponent = () => {
    switch (selectedMenuItem) {
      case "companySettings":
        return <CompanySettings />
      case "invoiceSettings":
        return <InvoiceSettings />
      case "invoiceTemplates":
        return <InvoiceTemplates />
      case "paymentMethods":
        return <PaymentMethods />
      case "bankSettings":
        return <BankSettings />
      case "taxRates":
        return <TaxRates />
      default:
        return <CompanySettings />
    }
  }

  return (
    <div className="p-1 sm:p-5 bg-[#F7F8F9] min-h-screen">
      <RowNavigation />
      <NavHeader
        current={{ name: "Membership app" }}
        previous={[
          { name: "Home", link: "/" },
          { name: "Membership", link: "/membership" },
        ]}
      />
      <div className="flex justify-between">
        <SideMenu
          onCompanySettingsClick={() => setSelectedMenuItem("companySettings")}
          onInvoiceSettingsClick={() => setSelectedMenuItem("invoiceSettings")}
          onInvoiceTemplateClick={() => setSelectedMenuItem("invoiceTemplates")}
          onPaymentMethodsClick={() => {
            setSelectedMenuItem("paymentMethods")
          }}
          onBankSettingsClick={() => {
            setSelectedMenuItem("bankSettings")
          }}
          onTaxRatesClick={() => {
            setSelectedMenuItem("taxRates")
          }}
        />
        {renderSelectedComponent()}
      </div>
    </div>
  )
}

export default Memberships
