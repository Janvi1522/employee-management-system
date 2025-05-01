// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery, gql } from '@apollo/client';

// const GET_EMPLOYEE_DETAILS = gql`
//   query GetEmployeeDetails($id: ID!) {
//     getEmployee(id: $id) {
//       id
//       firstName
//       lastName
//       age
//       dateOfJoining
//       title
//       department
//       employeeType
//       currentStatus
//     }
//   }
// `;

// function EmployeeDetails() {
//   const { id } = useParams();
//   const { loading, error, data } = useQuery(GET_EMPLOYEE_DETAILS, { variables: { id } });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const employee = data.getEmployee;

//   return (
//     <div className="container mt-5">
//       <h2>Employee Details</h2>
//       <p><strong>First Name:</strong> {employee.firstName}</p>
//       <p><strong>Last Name:</strong> {employee.lastName}</p>
//       <p><strong>Age:</strong> {employee.age}</p>
//       <p><strong>Date Of Joining:</strong> {employee.dateOfJoining}</p>
//       <p><strong>Title:</strong> {employee.title}</p>
//       <p><strong>Department:</strong> {employee.department}</p>
//       <p><strong>Employee Type:</strong> {employee.employeeType}</p>
//       <p><strong>Status:</strong> {employee.currentStatus ? 'Active' : 'Retired'}</p>
//     </div>
//   );
// }

// export default EmployeeDetails;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_EMPLOYEE_DETAILS = gql`
  query GetEmployeeDetails($id: ID!) {
    getEmployee(id: $id) {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;

function EmployeeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EMPLOYEE_DETAILS, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching employee details:", error);
    return <p>Error: {error.message}</p>;
  }

  const employee = data.getEmployee;

  return (
    <div className="container mt-5">
      <h2>Employee Details</h2>
      <p><strong>First Name:</strong> {employee.firstName}</p>
      <p><strong>Last Name:</strong> {employee.lastName}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Date Of Joining:</strong> {employee.dateOfJoining}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Employee Type:</strong> {employee.employeeType}</p>
      <p><strong>Status:</strong> {employee.currentStatus ? 'Active' : 'Retired'}</p>
    </div>
  );
}

export default EmployeeDetails;
