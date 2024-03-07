import React from "react"
import { Link } from "react-router-dom"

const SideMenu = ({
  onCompanySettingsClick,
  onInvoiceSettingsClick,
  onInvoiceTemplateClick,
  onPaymentMethodsClick,
  onBankSettingsClick,
  onTaxRatesClick,
  onPlanAndBillingClick,
}) => {
  return (
    <div className="bg-white rounded-lg h-auto w-1/4 p-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <ul>
        <li className="mb-2">
          <p className="hover:underline" onClick={onCompanySettingsClick}>
            Company Settings
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onInvoiceSettingsClick}>
            Invoice Settings
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onInvoiceTemplateClick}>
            Invoice Templates
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onPaymentMethodsClick}>
            Payment Methods
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onBankSettingsClick}>
            Bank Settings
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onTaxRatesClick}>
            Tax Rates
          </p>
        </li>
        <li className="mb-2">
          <p className="hover:underline" onClick={onPlanAndBillingClick}>
            Plan and Billing
          </p>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
