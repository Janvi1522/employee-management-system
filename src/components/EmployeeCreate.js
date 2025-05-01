import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_EMPLOYEES } from '../components/EmployeeTable'; 

const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $firstName: String!,
    $lastName: String!,
    $age: Int!,
    $dateOfJoining: String!,
    $title: String!,
    $department: String!,
    $employeeType: String!
  ) {
    createEmployee(
      firstName: $firstName,
      lastName: $lastName,
      age: $age,
      dateOfJoining: $dateOfJoining,
      title: $title,
      department: $department,
      employeeType: $employeeType
    ) {
      id
    }
  }
`;

function EmployeeCreate() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 20,
    dateOfJoining: '',
    title: 'Employee',
    department: 'IT',
    employeeType: 'FullTime',
  });

  // Refetch the employees after a successful mutation
  const [createEmployee, { loading, error }] = useMutation(CREATE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],  // This refetches the employee list
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    const formDataWithIntAge = {
      ...formData,
      age: parseInt(formData.age, 10) 
    };
    console.log('Form Data:', formDataWithIntAge);
    try {
      const result = await createEmployee({ variables: { ...formDataWithIntAge } });
      console.log('Mutation Result:', result);
    } catch (err) {
      console.error('Error creating employee:', err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Create Employee</h3> 
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    min="20"
                    max="70"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Of Joining</label>
                  <input
                    type="date"
                    name="dateOfJoining"
                    className="form-control"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <select
                    name="title"
                    className="form-select"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <select
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Employee Type</label>
                  <select
                    name="employeeType"
                    className="form-select"
                    value={formData.employeeType}
                    onChange={handleChange}
                  >
                    <option value="FullTime">Full Time</option>
                    <option value="PartTime">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Employee'}
                </button>
              </form>
              {error && <p className="text-danger mt-3">Error: {error.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCreate;
