import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import { IconButton, TextField } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useResetPasswordMutation } from "../../api/hook"


const changePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "This field is required ❗❗" })
      .min(8, { message: "Password too Short 🤭" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "Provide Strong Password like you 😉",
      }),
    confirm_password: z
      .string()
      .min(1, { message: "This field is required ❗❗" })
      .min(8, { message: "Password too Short 🤭" }),
  })
  .refine(data => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match 😞",
  })

const ChangePassword = () => {
  const [showPasswordOld, setShowPasswordOld] = useState(false)
  const [showPasswordNew, setShowPasswordNew] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  })
  const navigate = useNavigate()
  const location = useLocation()
  const resetPasswordMutation = useResetPasswordMutation(navigate)
  const handleFormSubmit = data => {
    resetPasswordMutation.mutate({ email: location.state.email, password: data.password })
  }

  return (
    <div className="">
      <form
        className="space-y-4 md:space-y-6 w-[380px]"
        onSubmit={handleSubmit(handleFormSubmit)}
        autoComplete="off"
        aria-autocomplete="list"
      >
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Old Password
          </label>
          <TextField
            id="password"
            type={showPasswordOld ? "text" : "password"}
            size="small"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPasswordOld(!showPasswordOld)} edge="end">
                    {showPasswordOld ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors?.password && <span className="text-red-400">{errors?.password.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            New Password
          </label>
          <TextField
            id="password"
            type={showPasswordNew ? "text" : "password"}
            size="small"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPasswordNew(!showPasswordNew)} edge="end">
                    {showPasswordNew ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors?.password && <span className="text-red-400">{errors?.password.message}</span>}
        </div>
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Confirm Password
          </label>
          <TextField
            id="confirm_password"
            type={showPasswordConfirm ? "text" : "password"}
            size="small"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("confirm_password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} edge="end">
                    {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors?.confirm_password && <span className="text-red-400">{errors?.confirm_password.message}</span>}
        </div>
        {/* <button
          type="submit"
          className={` ${
            false && "btn-disabled"
          } text-white bg-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {false ? <span className="loading loading-spinner loading-xs"></span> : "Save Password"}
        </button> */}

        <div className="flex flex-row gap-5 items-center justify-center mt-5">
          <button className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md">
            Save
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-md">Cencel</button>
        </div>

      </form>
    </div>
  )
}

export default ChangePassword
