import React, { useState } from "react"
import { Stepper, Step, StepLabel, TextField, MenuItem, Button } from "@mui/material"
import { WhatsappShareButton } from "react-share"
import { WhatsApp } from "@mui/icons-material"

function ClientForm() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = ["Client Information", "Health and Fitness", "Goals and Preferences", "Membership Details"]

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSubmit = () => {
    // Submit form data
  }

  const renderStepContent = step => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="font-bold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-5">
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
              <TextField label="Gender" select fullWidth>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="female">Transgender</MenuItem>
                <MenuItem value="female">Others</MenuItem>
              </TextField>
              <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} fullWidth />
              <TextField label="Contact Number (WhatsApp)" type="number" fullWidth />
              <TextField label="Email Address" type="email" fullWidth />
            </div>
            <TextField label="Residential Address" multiline rows={3} fullWidth />
            <div className="space-y-4">
              <h2 className="font-bold">Emergency Contact Information</h2>
              <div className="grid grid-cols-2 gap-5">
                <TextField label="Name" fullWidth />
                <TextField label="Relationship to the Client" fullWidth />
                <TextField label="Phone Number" type="number" fullWidth />
                <TextField label="Email Address" type="email" fullWidth />
              </div>
              <TextField label="Residential Address" multiline rows={3} fullWidth />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="font-bold">Health and Fitness Information</h2>
            <div className="grid grid-cols-2 gap-5">
              <TextField label="Height" type="number" InputProps={{ inputProps: { min: 0 } }} fullWidth />
              <TextField label="Weight" type="number" InputProps={{ inputProps: { min: 0 } }} fullWidth />
              <TextField label="Medical Conditions (if any)" fullWidth />
              <TextField label="Allergies (if any)" fullWidth />
              <TextField label="Injuries (if any)" fullWidth />
              <TextField label="Current Fitness Level" select helperText="Select your current fitness level" fullWidth>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </TextField>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4 ">
            <h2 className="font-bold">Goals and Preferences</h2>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8">
              <TextField label="Fitness Goals" select helperText="Select your fitness goals" fullWidth>
                <MenuItem value="weight-loss">Weight Loss</MenuItem>
                <MenuItem value="muscle-gain">Muscle Gain</MenuItem>
                <MenuItem value="flexibility">Improved Flexibility</MenuItem>
                <MenuItem value="endurance">Increased Endurance</MenuItem>
              </TextField>
              <TextField label="Class Preferences (Day)" select helperText="Select your preferred class days" fullWidth>
                <MenuItem value="monday">Monday</MenuItem>
                <MenuItem value="tuesday">Tuesday</MenuItem>
                <MenuItem value="wednesday">Wednesday</MenuItem>
                <MenuItem value="thursday">Thursday</MenuItem>
                <MenuItem value="friday">Friday</MenuItem>
                <MenuItem value="saturday">Saturday</MenuItem>
                <MenuItem value="sunday">Sunday</MenuItem>
              </TextField>
              <TextField label="Class Preferences (Time)" type="time" InputLabelProps={{ shrink: true }} fullWidth />
              <TextField label="Class Preferences (Instructor)" select fullWidth>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
              <TextField label="Additional Services Required" select fullWidth>
                <MenuItem value="nutritional">Nutritional Counselling</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField label="Fitness Assessment" select fullWidth>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="font-bold">Membership Details</h2>
            <div className="grid grid-cols-2 gap-5">
              <TextField label="Membership Type" select helperText="Select your membership type" fullWidth>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
                <MenuItem value="annual">Annual</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField label="Membership Start Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
              <TextField label="Payment Method" select helperText="Select your payment method" fullWidth>
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="debit">Debit Card</MenuItem>
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField label="Payment Frequency" select helperText="Select your payment frequency" fullWidth>
                <MenuItem value="one-time">One-time</MenuItem>
                <MenuItem value="recurring">Recurring</MenuItem>
              </TextField>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const generateShareableLink = () => {
    const url = window.location.href
    return url
  }

  return (
    <div className="w-full border rounded-md mx-auto mt-8 p-4">
      <Stepper activeStep={activeStep} className="my-5">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="m-3 p-3">
        <div className="mt-4">
          {renderStepContent(activeStep)}
          <div className="mt-4 flex justify-center">
            {activeStep !== 0 && (
              <Button variant="contained" onClick={handleBack}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              className="ml-2"
              style={{ marginLeft: "8px" }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative right-[1rem] top-[-48rem] ml-2" title="Share form link via WhatsApp">
        <WhatsappShareButton className=" rounded-full" url={`Check out this form: ${generateShareableLink()}`}>
          <WhatsApp className="absolute right-[0] top-0 mt-2 text-green-500" />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default ClientForm