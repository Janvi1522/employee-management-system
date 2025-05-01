// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Employee {
//     id: ID!
//     firstName: String!
//     lastName: String!
//     age: Int!
//     dateOfJoining: String!
//     title: String!
//     department: String!
//     employeeType: String!
//     currentStatus: Boolean!
//   }

//   type Mutation {
//     createEmployee(
//       firstName: String!,
//       lastName: String!,
//       age: Int!,
//       dateOfJoining: String!,
//       title: String!,
//       department: String!,
//       employeeType: String!
//     ): Employee
//   }
// `;

// module.exports = typeDefs;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type Query {
    getEmployees: [Employee]  // Define the getEmployees query
  }

  type Mutation {
    createEmployee(
      firstName: String!
      lastName: String!
      age: Int!
      dateOfJoining: String!
      title: String!
      department: String!
      employeeType: String!
    ): Employee
  }
`;

module.exports = typeDefs;
