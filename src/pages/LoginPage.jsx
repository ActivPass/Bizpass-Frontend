import { useState, useEffect } from "react"
import ActivPassImage from "../assets/images/ActivPass.png"
import LoginImage from "../assets/images/loginpage.jpg"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField, Link } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import { useLoginMutation } from "../api/hook/useLogin"
import { useNavigate } from "react-router-dom"

const userSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid activpass username " }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  })

  const navigate = useNavigate()
  const loginMutation = useLoginMutation(navigate, reset)
  const postFormData = data => loginMutation.mutate(data)

  const [showPassword, setShowPassword] = useState(false)
  const [rememberPreference, setRememberPreference] = useState(false)

  useEffect(() => {
    // Load saved credentials if "Remember Me" is checked
    const savedCredentials = localStorage.getItem("savedCredentials")
    if (savedCredentials && rememberPreference) {
      const { email, password } = JSON.parse(savedCredentials)
      setValue("email", email)
      setValue("password", password)
    } else {
      // Clear the password field when "Remember Me" is unchecked
      setValue("email", "")
      setValue("password", "")
    }
  }, [rememberPreference, setValue])

  const handleRememberMe = data => {
    // Save credentials if "Remember Me" is checked
    const credentialsToSave = {
      email: data.email,
      password: data.password,
      remember: rememberPreference,
    }

    if (rememberPreference) {
      localStorage.setItem("savedCredentials", JSON.stringify(credentialsToSave))
    } else {
      localStorage.removeItem("savedCredentials")
    }

    postFormData(data)
  }

  return (
    <section className="bg-[#D9ECFA] px-4 sm:h-screen">
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-row w-full justify-center">
          <div className="bg-white">
            <div className="m-6 space-y-4 md:space-y-6">
              <div className="w-full flex justify-center items-center">
                <img className="mb-6 mr-2 w-[50%]" src={ActivPassImage} alt="logo" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl">Company Login</h1>
                <div className="flex justify-center pt-1">
                  <p className="border-[#418BE6] w-[30%] border-b-2"></p>
                </div>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(data => handleRememberMe(data))}
                autoComplete="off"
                aria-autocomplete="list"
              >
                <div>
                  <TextField
                    id="email"
                    label={rememberPreference ? "" : "Email"}
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "#E9E9E9" }}
                    {...register("email")}
                  />
                </div>
                {errors?.email && <span className="text-red-400">{errors?.email.message}</span>}
                <div>
                  <TextField
                    id="password"
                    label={rememberPreference ? "" : "Password"}
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    sx={{ width: "100%", backgroundColor: "#E9E9E9" }}
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

                <div className="flex justify-between">
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
                  <Link href="/forgotpassword">Forgot password?</Link>
                </div>
                <button
                  type="submit"
                  disabled={loginMutation?.isLoading}
                  className={` ${
                    loginMutation?.isLoading && "btn-disabled"
                  } text-white bg-blue-500 p-2 rounded-md w-full`}
                >
                  {loginMutation?.isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Login"}
                </button>
                {loginMutation?.error && (
                  <div className="pt-4 flex justify-center font-semibold text-lg text-red-500">
                    {loginMutation.error.response?.data?.message || "Email or password is invalid!"}
                  </div>
                )}
              </form>
            </div>
          </div>
          <img className="hidden sm:block  sm:w-[30%]" src={LoginImage} alt="loginImage" />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
