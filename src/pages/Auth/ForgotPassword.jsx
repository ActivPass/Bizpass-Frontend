import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../api/hook/useLogin"
import { AuthLayout } from "../../components"

const emailSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid bizpass username" }),
})

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(emailSchema) })

  const navigate = useNavigate()
  const loginMutation = useLoginMutation(navigate, reset)
  const postFormData = data => loginMutation.mutate(data)

  const handleFormSubmit = data => {
    const credentialsToSave = {
      email: data.email,
    }
  }

  return (
    <AuthLayout titleTag={"Enter your email address"}>
      <form
        className="space-y-4 md:space-y-6 min-w-[380px]"
        onSubmit={handleSubmit(data => handleFormSubmit(data))}
        autoComplete="off"
        aria-autocomplete="lit"
      >
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="email">
            Email address
          </label>
          <TextField id="email" hiddenLabel sx={{ width: "100%" }} {...register("email")} />
        </div>
        {errors?.email && <span className="text-red-400">{errors?.email.message}</span>}
        <button
          type="submit"
          disabled={loginMutation?.isLoading}
          className={` ${
            loginMutation?.isLoading && "btn-disabled"
          } text-white bg-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {loginMutation?.isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Send OTP"}
        </button>
        <button
          type="submit"
          disabled={loginMutation?.isLoading}
          className={` hover:text-white text-blue-500 border border-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {loginMutation?.isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Back to Login"}
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

export default ForgotPassword
