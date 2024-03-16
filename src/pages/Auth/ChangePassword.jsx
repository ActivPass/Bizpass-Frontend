import React, { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import { IconButton, TextField } from "@mui/material"
import { AuthLayout } from "../../components"

const changepasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirm_password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(changepasswordSchema),
  })
  const handleFormSubmit = data => {
    const CredentialsToSave = {
      password: data.password,
      confirm_password: data.confirm_password,
    }
  }
  return (
    <AuthLayout titleTag={"Reset Password"}>
      <form
        className="space-y-4 md:space-y-6 w-[380px]"
        onSubmit={handleSubmit(data => handleFormSubmit(data))}
        autoComplete="off"
        aria-autocomplete="list"
      >
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Enter New Password
          </label>
          <TextField
            id="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("password")}
            helperText={"Password must contains atleast 1 Uppercase, 1 Lowercase, 1 Symbol and 1 Digit"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Confirm Password
          </label>
          <TextField
            id="confirm_password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("confirm_password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <button
          type="submit"
          className={` ${
            false && "btn-disabled"
          } text-white bg-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {false ? <span className="loading loading-spinner loading-xs"></span> : "Save Password"}
        </button>
      </form>
    </AuthLayout>
  )
}

export default ChangePassword
