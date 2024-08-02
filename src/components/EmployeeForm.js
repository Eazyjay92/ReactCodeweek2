import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={employee.position}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
