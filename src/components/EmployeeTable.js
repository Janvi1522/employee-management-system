import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { format, fromUnixTime } from 'date-fns';  // Import format and fromUnixTime

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
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

function EmployeeTable() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (dateOfJoining) => {
    const date = fromUnixTime(dateOfJoining / 1000);  // Convert timestamp to date
    return format(date, 'MM/dd/yyyy');  // Format the date
  };

  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Date Of Joining</th>
          <th>Title</th>
          <th>Department</th>
          <th>Employee Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.getEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.age}</td>
            <td>{formatDate(employee.dateOfJoining)}</td>
            <td>{employee.title}</td>
            <td>{employee.department}</td>
            <td>{employee.employeeType}</td>
            <td>{employee.currentStatus ? 'Active' : 'Retired'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
