import { gql } from '@apollo/client';

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
