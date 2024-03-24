import React from "react"
import { Check, Clear } from "@mui/icons-material"
// import customAxios from "../../api/customAxios"

function Card(props) {
  //   const paymentInitiator = async e => {
  //     const data = await customAxios.post("/payments", {
  //       amount: 200,
  //       currency: "INR",
  //       receipt: "YUGKqw12",
  //     })
  //     const res = await data

  //     var options = {
  //       key: "rzp_test_enHC5gLLwIBfhu", // Enter the Key ID generated from the Dashboard
  //       amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //       currency: "INR",
  //       name: "Bizpass", //your business name
  //       description: "Test Transaction",
  //       image: "https://example.com/your_logo",
  //       order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //       handler: function (response) {
  //         alert(response.razorpay_payment_id)
  //         alert(response.razorpay_order_id)
  //         alert(response.razorpay_signature)
  //       },
  //       prefill: {
  //         //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
  //         name: "Activpass", //your customer's name
  //         email: "bizpass@act.com",
  //         contact: "9000090000", //Provide the customer's phone number for better conversion rates
  //       },
  //       notes: {
  //         address: "Razorpay Corporate Office",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     }
  //     var rzp1 = new window.Razorpay(options)
  //     rzp1.on("payment.failed", function (response) {
  //       alert(response.error.code)
  //       alert(response.error.description)
  //       alert(response.error.source)
  //       alert(response.error.step)
  //       alert(response.error.reason)
  //       alert(response.error.metadata.order_id)
  //       alert(response.error.metadata.payment_id)
  //     })
  //     document.getElementById("rzp-button1").onclick = function (e) {
  //       rzp1.open()
  //       e.preventDefault()
  //     }

  //     console.log(res)
  //   }
  return (
    // <button id="rzp-button1" onClick={paymentInitiator}>
    //   Pay Now
    // </button>
    <div className={`border border-gray-200 rounded-xl h-[100vh] w-full  ${props.data.color}`}>
      <div className="p-5">
        <div className="">
          <h5 className="opacity-50 text-uppercase text-center mb-3">{props.data.plan}</h5>
          <h6 className="text-center text-2xl font-bold">{props.data.price}</h6>
          <hr className="my-4" />
          <ul className="list-none">
            {props.data.features.map((feature, index) => (
              <li key={index} className={`mb-5 ${feature.isEnabled ? "" : "opacity-50"}`}>
                <span className="">{feature.isEnabled ? <Check /> : <Clear />}</span>
                {feature.name}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <button
              //   onClick={paymentInitiator}
              //   id="rzp-button1"
              className="bg-blue-700 p-3 text-white rounded-3xl font-bold uppercase inline-flex"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
