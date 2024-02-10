import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const AddEmployeeForm = () => {
  return (
    <div className="m-1 sm:m-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Employee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <TextField id="firstName" label="First Name" variant="standard" className="w-full" required />
        </div>
        <div>
          <TextField id="lastName" label="Last Name" variant="standard" className="w-full" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <TextField id="email" label="Email" variant="standard" className="w-full" required />
        </div>
        <div>
          <TextField id="joiningDate" label="Joining Date" variant="standard" className="w-full" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <TextField
            id="designation"
            select
            label="Designation"
            variant="standard"
            className="w-full"
            required
          >
            <MenuItem disabled value="">Select designation</MenuItem>
            <MenuItem value="coach">Coach</MenuItem>
            <MenuItem value="trainer">Trainer</MenuItem>
            <MenuItem value="supervisor">Supervisor</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            id="gender"
            select
            label="Gender"
            variant="standard"
            className="w-full"
            required
          >
            <MenuItem disabled value="">Select gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="female">Transgender</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <TextField id="telephone" label="Phone" variant="standard" className="w-full" required />
        </div>
        <div>
          <TextField id="birthDate" label="Birth Date" variant="standard" className="w-full" required />
        </div>
      </div>
      <div className="mt-4">
        <TextField
          id="address"
          label="Address"
          multiline
          rows={3}
          variant="standard"
          className="w-full"
          required
        />
      </div>
      <div className="mt-6 text-center">
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="error" style={{ marginLeft: '8px' }}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
