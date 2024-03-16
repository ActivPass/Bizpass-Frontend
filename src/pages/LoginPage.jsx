import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import { useNavigate } from "react-router-dom"
import { AuthLayout } from "../components"
import { useLoginMutation } from "../api/hook"

const userSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid activpass username " }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

const LoginPage = () => {
  const savedUser = localStorage.getItem("savedUser")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberPreference, setRememberPreference] = useState(savedUser?.length > 0 ? true : false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  })

  const navigate = useNavigate()
  const loginMutation = useLoginMutation(navigate, reset)
  const postFormData = data => loginMutation.mutate(data)
  const handleRememberMe = data => {
    if (rememberPreference) {
      localStorage.setItem("savedUser", JSON.stringify(data))
    }
    postFormData(data)
  }
  return (
    <AuthLayout titleTag={"Login to dashboard"}>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(data => handleRememberMe(data))}
        autoComplete="off"
        aria-autocomplete="list"
      >
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <TextField
            defaultValue={savedUser && JSON.parse(localStorage.getItem("savedUser")).email}
            id="email"
            hiddenLabel
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("email")}
          />
        </div>
        {errors?.email && <span className="text-red-400">{errors?.email.message}</span>}
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <TextField
            id="password"
            defaultValue={savedUser && JSON.parse(localStorage.getItem("savedUser")).password}
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("password")}
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
        {errors?.password && <span className="text-red-400">{errors?.password.message}</span>}

        <div className="flex items-center justify-between">
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberPreference}
                  onChange={() => setRememberPreference(!rememberPreference)}
                  color="primary"
                />
              }
              label="Remember my preference"
            />
          </div>
          <Link className="text-blue-500" to="/forgotpassword">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={loginMutation?.isLoading}
          className={` ${
            loginMutation?.isLoading && "btn-disabled"
          } text-white min-h-[56px] bg-blue-500 hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {loginMutation?.isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Login"}
        </button>
        {loginMutation?.error && (
          <div className="pt-4 flex justify-center font-semibold text-lg text-red-500">
            {loginMutation.error.response?.data?.message || "Email or password is invalid!"}
          </div>
        )}
      </form>
    </AuthLayout>
  )
}

export default LoginPage
