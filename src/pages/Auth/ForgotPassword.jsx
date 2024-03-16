import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useForgotPasswordMutation } from "../../api/hook"
import { AuthLayout } from "../../components"
import { data } from "autoprefixer"
import { toast } from "react-toastify"

const emailSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid Bizpass Email" }).email({ message: "Still Invalid Email" }),
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

  const forgotPasswordMutation = useForgotPasswordMutation(navigate, reset)
  const handleFormSubmit = data => forgotPasswordMutation.mutate(data.email)
  useEffect(() => {
    if (forgotPasswordMutation.data !== undefined && data.status !== 200) {
      toast.error(forgotPasswordMutation?.data?.data?.message || "UnAuthorized")
    }
  }, [forgotPasswordMutation.data])

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
          disabled={forgotPasswordMutation?.isPending}
          className={` ${
            forgotPasswordMutation?.isPending && "btn-disabled"
          } text-white bg-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          {forgotPasswordMutation?.isPending ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Send OTP"
          )}
        </button>
        <button
          type="submit"
          disabled={forgotPasswordMutation?.isPending}
          className={` hover:text-white text-blue-500 border border-blue-500 min-h-[56px] font-bold hover:bg-blue-600 p-2 rounded-md w-full`}
        >
          Back to Login
        </button>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
