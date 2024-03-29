import React, { useState } from "react";
import BizzPassImage from "../../assets/images/bizzpass.png"


const CheckInForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [dob, setDOB] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (isValidForm()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      if (step === 2) {
        setFormSubmitted(true);
        console.log("First Name:", firstName);
        console.log("Date of Birth:", dob);
        console.log("Mobile Number:", mobileNumber);
        
        setFirstName("");
        setDOB("");
        setMobileNumber("");
        console.log("Form submitted successfully!");
        setTimeout(() => {
          setFormSubmitted(false);
        }, 2000);
      } else {
        setStep(step + 1);
      }
    }
  };  
  
  
  const isValidForm = () => {
    let errors = {};

    if (step === 1) {
      if (!firstName.trim()) {
        errors.firstName = "Please enter your first name.";
      }
    } else if (step === 2) {
      if (!isValidDate(dob)) {
        errors.dob = "Please enter a valid date of birth.";
      }
      if (!isValidMobileNumber(mobileNumber)) {
        errors.mobileNumber = "Please enter a valid mobile number.";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidDate = (date) => {
    return /\d{4}-\d{2}-\d{2}/.test(date);
  };

  const isValidMobileNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="border p-5 m-5 rounded-md">
          <div className="flex justify-center items-center mb-10"><img src={BizzPassImage} className="w-[210px]" alt="bizpass logo" /></div>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Name</li>
            <li className={`step ${step >= 2 ? "step-primary" : ""}`}>General Info</li>
          </ul>
          <form onSubmit={handleSubmit} className="w-[25rem] mt-4 p-4 rounded-lg ">
            {step === 1 && (
              <div className="mb-4">
                <label className="block mb-2">First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`input input-bordered w-full ${errors.firstName && "input-error"}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label className="block mb-2">Date of Birth:</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    className={`input input-bordered w-full ${errors.dob && "input-error"}`}
                  />
                  {console.log(dob)}
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Mobile Number:</label>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className={`input input-bordered w-full ${errors.mobileNumber && "input-error"}`}
                  />
                  {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                </div>
              </div>
            )}
            <div className="flex justify-between">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="btn btn-secondary">
                  Back
                </button>
              )}
              {step < 2 && (
                <button type="button" onClick={handleNext} className="btn btn-primary">
                  Next
                </button>
              )}
              {step === 2 && (
                <button type="submit" className="btn btn-primary">
                 Check-In
                </button>
              )}
            </div>
          </form>
          {formSubmitted && (
            <p className="m-1 text-green-600">{`Hello ${firstName} Check In Accepted !`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckInForm;
