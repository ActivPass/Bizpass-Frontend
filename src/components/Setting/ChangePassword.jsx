import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import { IconButton, TextField } from "@mui/material"
import { useChangePasswordMutation } from "../../api/hook"

const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, { message: "This field is required ❗❗" })
      .min(8, { message: "Password too Short 🤭" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "Provide Strong Password like you 😉",
      }),
    newPassword: z
      .string()
      .min(1, { message: "This field is required ❗❗" })
      .min(8, { message: "Password too Short 🤭" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "Provide Strong Password like you 😉",
      }),
    confirmNewPassword: z
      .string()
      .min(1, { message: "This field is required ❗❗" })
      .min(8, { message: "Password too Short 🤭" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "Provide Strong Password like you 😉",
      }),
  })
  .refine(data => data.oldPassword !== data.newPassword, {
    path: ["newPassword"],
    message: "Why Same! Use Different Password😞",
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match 😞",
  })

const ChangePassword = () => {
  const [visibilityStatus, setVisibilityStatus] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  })
  const changePasswordMutation = useChangePasswordMutation()
  const handleFormSubmit = data => {
    const changePasswordRequestObj = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    }
    changePasswordMutation.mutate(changePasswordRequestObj)
  }
  const renderVisibilityIcons = field => (field ? <Visibility /> : <VisibilityOff />)

  return (
    <form
      className="space-y-4 md:space-y-6 w-[380px]"
      onSubmit={handleSubmit(handleFormSubmit)}
      autoComplete="off"
      aria-autocomplete="list"
    >
      <div className="space-y-2">
        <label className="font-semibold" htmlFor="oldPassword">
          Old Password
        </label>
        <TextField
          id="oldPassword"
          type={visibilityStatus.oldPassword ? "text" : "password"}
          size="small"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("oldPassword")}
          error={Object.keys(errors).includes("oldPassword")}
          helperText={errors?.oldPassword?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setVisibilityStatus({ ...visibilityStatus, oldPassword: !visibilityStatus.oldPassword })
                  }
                  edge="end"
                >
                  {renderVisibilityIcons(visibilityStatus.oldPassword)}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="space-y-2">
        <label className="font-semibold" htmlFor="newPassword">
          New Password
        </label>
        <TextField
          id="newPassword"
          type={visibilityStatus.newPassword ? "text" : "password"}
          size="small"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("newPassword")}
          error={Object.keys(errors).includes("newPassword")}
          helperText={errors?.newPassword?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setVisibilityStatus({ ...visibilityStatus, newPassword: !visibilityStatus.newPassword })
                  }
                  edge="end"
                >
                  {renderVisibilityIcons(visibilityStatus.newPassword)}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="space-y-2">
        <label className="font-semibold" htmlFor="confirmNewPassword">
          Confirm Password
        </label>
        <TextField
          id="confirmNewPassword"
          type={visibilityStatus.confirmNewPassword ? "text" : "password"}
          size="small"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("confirmNewPassword")}
          error={Object.keys(errors).includes("confirmNewPassword")}
          helperText={errors?.confirmNewPassword?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setVisibilityStatus({
                      ...visibilityStatus,
                      confirmNewPassword: !visibilityStatus.confirmNewPassword,
                    })
                  }
                  edge="end"
                >
                  {renderVisibilityIcons(visibilityStatus.confirmNewPassword)}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <button
        className="btn btn-primary w-full py-4 text-white"
        disabled={changePasswordMutation.isPending}
        type="submit"
      >
        {changePasswordMutation.isPending ? (
          <span className="flex justify-center items-center loading loading-spinner"></span>
        ) : (
          "Update Password"
        )}
      </button>
    </form>
  )
}

export default ChangePassword
