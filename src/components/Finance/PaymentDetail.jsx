import React from "react"
import { useParams } from "react-router-dom"

function PaymentDetail() {
  const { status } = useParams()
  return <div>PaymentDetail {status}</div>
}

export default PaymentDetail
