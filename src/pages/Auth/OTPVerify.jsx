import React, { useState } from "react"
import { useRef } from "react"
import { TextField } from "@mui/material"
import { AuthLayout } from "../../components"

const OTPVerify = () => {
  const [otp, setOTP] = useState(["", "", "", ""])
  const inputRefs = useRef([])
  const handleChange = (index, event) => {
    const updatedOTP = [...otp]
    updatedOTP[index] = event.target.value.slice(-1)
    setOTP(updatedOTP)

    if (event.target.value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus()
    }
  }
  return (
    <AuthLayout titleTag={"Verify OTP"}>
      <form
        className="space-y-4 md:space-y-6 w-[380px]"
        // onSubmit={handleSubmit(data => handleFormSubmit(data))}
        autoComplete="off"
        aria-autocomplete="lit"
      >
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Enter your OTP
          </label>
          <div>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                inputRef={el => (inputRefs.current[index] = el)}
                id={`otp-${index}`}
                variant="outlined"
                value={digit}
                onChange={e => handleChange(index, e)}
                onKeyDown={e => handleKeyDown(index, e)}
                inputProps={{ maxLength: 1 }}
                style={{ margin: "5px", width: "60px", textAlign: "center" }}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className={` ${
            false && "btn-disabled"
          } text-white bg-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {false ? <span className="loading loading-spinner loading-xs"></span> : "Verify OTP"}
        </button>
        <button
          type="submit"
          className={` hover:text-white text-blue-500 border border-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {false ? <span className="loading loading-spinner loading-xs"></span> : "Back to Login"}
        </button>
      </form>
    </AuthLayout>
  )
}

export default OTPVerify
