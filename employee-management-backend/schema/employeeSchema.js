const { gql } = require('apollo-server-express');

// Define the GraphQL Schema
const typeDefs = gql`
  # Employee type
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Boolean!
  }

  # Mutation type for creating a new employee
  type Mutation {
    createEmployee(
      firstName: String!,
      lastName: String!,
      age: Int!,
      dateOfJoining: String!,
      title: String!,
      department: String!,
      employeeType: String!
    ): Employee
  }

  # Query type (for fetching employees if needed)
  type Query {
    getEmployees: [Employee]
  }
`;

module.exports = typeDefs;
