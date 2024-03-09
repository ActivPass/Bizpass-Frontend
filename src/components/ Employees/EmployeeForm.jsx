import React, { useState } from "react";
import { Stepper, Step, StepLabel, TextField, MenuItem, Button, Autocomplete } from "@mui/material";

export function EmployeeForm() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Employee Information", "Role and Responsibilities", "Work Schedule", "Compensation, Benefits & Policies",];

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        // Submit form data
    };

    const days = [{ name: "Monday", value: "monday" }, { name: "Tuesday", value: "tuesday" }, { name: "Wednesday", value: "wednesday" }, { name: "Thursday", value: "thursday" }, { name: "Friday", value: "friday" }, { name: "Saturday", value: "saturday" }, { name: "Sunday", value: "sunday" }];
    const benefits = [{ name: "Health Insurance", value: "health_insurance" }, { name: "Retirement Plans", value: "retirement_plans" }, { name: "Other (please specify", value: "others" }];
    const compensation = [{ name: "Bonuses", value: "Bonuses" }, { name: "Incentives", value: "Incentives" }, { name: "Other (please specify)", value: "Other" }];
    const renderStepContent = step => {
        switch (step) {
            case 0:
                return (
                    <div className="space-y-4">
                        <h2 className="font-bold">Employee Information</h2>
                        <div className="grid grid-cols-2 gap-5">
                            <TextField label="Full Name" fullWidth />
                            <TextField label="Gender" select fullWidth>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="female">Transgender</MenuItem>
                                <MenuItem value="female">Others</MenuItem>
                            </TextField>
                            <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} fullWidth />
                            <TextField label="Contact Number (WhatsApp)" type="number" fullWidth />
                            <TextField label="Email Address" type="email" fullWidth />
                            <TextField label="Residential Address" className="col-span-2" multiline rows={3} fullWidth />
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-bold">Emergency Contact Information</h2>
                            <div className="grid grid-cols-2 gap-5">
                                <TextField label="Name" fullWidth />
                                <TextField label="Relationship to the Client" fullWidth />
                                <TextField label="Phone Number" type="number" fullWidth />
                                <TextField label="Email Address" type="email" fullWidth />
                                <TextField label="Residential Address" className="col-span-2" multiline rows={3} fullWidth />
                            </div>

                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4">
                        <h2 className="font-bold">Role and Responsibilities</h2>
                        <div className="grid grid-cols-2 gap-5">
                            <TextField label="Job Title" type="number" InputProps={{ inputProps: { min: 0 } }} fullWidth />
                            <TextField label="Department/Team" type="number" InputProps={{ inputProps: { min: 0 } }} fullWidth />
                            <TextField label="Job Description and Responsibilities" className="col-span-2" multiline rows={3} fullWidth />
                            <TextField label="Primary Responsibilities" fullWidth />
                            <TextField label="Roles" select helperText="select role" fullWidth>
                                <MenuItem value="Manager">Manager</MenuItem>
                                <MenuItem value="Employee">Employee</MenuItem>
                                <MenuItem value="Owner">Owner</MenuItem>
                            </TextField>
                            <TextField label="Reporting Manager" select fullWidth>
                                <MenuItem value="devan">Devan</MenuItem>
                                <MenuItem value="akash">Akash</MenuItem>
                                <MenuItem value="cecil">Cecil</MenuItem>
                            </TextField>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4 ">
                        <h2 className="font-bold">Work Schedule</h2>

                        <div className="grid grid-cols-2 gap-5">
                            <Autocomplete
                                className="col-span-2"
                                options={days}
                                fullWidth
                                multiple
                                getOptionLabel={option => option.name}
                                renderInput={(params) => <TextField {...params} label="Workdays" />} />
                            <h2 className="font-bold col-span-2">Work Hours</h2>
                            <TextField label="Start Time" InputLabelProps={{ shrink: true }} type="time" fullWidth />
                            <TextField label="End Time" InputLabelProps={{ shrink: true }} type="time" fullWidth />
                            <h2 className="font-bold col-span-2">Break Schedule</h2>
                            <TextField label="Start Time" InputLabelProps={{ shrink: true }} type="time" fullWidth />
                            <TextField label="End Time" InputLabelProps={{ shrink: true }} type="time" fullWidth />
                        </div>

                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <h2 className="font-bold">Compensation, Benefits & Policies</h2>
                        <div className="grid grid-cols-2 gap-5">
                            <Autocomplete
                                className="col-span-2"
                                options={benefits}
                                fullWidth
                                multiple
                                getOptionLabel={option => option.name}
                                renderInput={(params) => <TextField {...params} label="Benefits" />} />
                            <h2 className="font-bold col-span-2">Salary</h2>
                            <TextField label="Yearly CTC" type="number" fullWidth />
                            <TextField label="Monthly CTC" type="number" fullWidth />
                            <Autocomplete
                                className="col-span-2"
                                options={compensation}
                                fullWidth
                                multiple
                                getOptionLabel={option => option.name}
                                renderInput={(params) => <TextField {...params} label="Compensation" />} />


                        </div>
                        <div className="space-y-2">
                            <h2 className="font-bold"> HR Policies and Procedures</h2>
                            <h2 className="font-bold">Review and Acknowledge HR Policies</h2>
                            <div className="px-4">
                                <a className="block text-blue-700 hover:underline hover:text-blue-800" href="#">Code of Conduct</a>
                                <a className="block text-blue-700 hover:underline hover:text-blue-800" href="#">Anti-Harassment Policy</a>
                                <a className="block text-blue-700 hover:underline hover:text-blue-800" href="#">Other (please specify)</a>
                            </div>
                            <h2 className="font-bold">Review and Acknowledge HR Procedures</h2>
                            <div className="px-4">
                                <a className="block text-blue-700 hover:underline hover:text-blue-800" href="#">Leave Policy</a>
                                <a className="block text-blue-700 hover:underline hover:text-blue-800" href="#">Expense Reimbursement</a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

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
        </div>
    );
}
