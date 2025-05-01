const Employee = require("../models/Employee"); // Import the Employee model

const resolvers = {
  Query: {
    // Resolver for fetching all employees
    // getEmployees: async () => {
    //   return await Employee.find();
    getEmployees: async (_, { employeeType }) => {
      try {
        // If employeeType is provided, filter by it; otherwise, return all employees
        const filter = employeeType ? { employeeType } : {};
        return await Employee.find(filter);
      } catch (error) {
        console.error("Error fetching employees:", error);
        throw new Error('Failed to fetch employees');
      }
    },
  },

  Mutation: {
    // Resolver for creating a new employee
    createEmployee: async (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType }) => {
      try {
        console.log("Creating employee:", { firstName, lastName, age, dateOfJoining, title, department, employeeType });

        // Create a new employee object
        const newEmployee = new Employee({
          firstName,
          lastName,
          age,
          dateOfJoining: new Date(dateOfJoining), // Ensure date is saved as Date object
          title,
          department,
          employeeType,
          currentStatus: true, // Default to "active" employee
        });

        // Save the new employee to the database
        const savedEmployee = await newEmployee.save();
        console.log("Employee saved successfully:", savedEmployee);

        // Return the saved employee object, mapping MongoDB's _id to GraphQL's id
        return {
          id: savedEmployee._id,  // Map MongoDB _id to GraphQL id
          ...savedEmployee._doc,  // Spread the other properties from the document
          dateOfJoining: savedEmployee.dateOfJoining.toISOString(),  // Format the dateOfJoining
        };
      } catch (error) {
        console.error("Error creating employee:", error);
        throw new Error('Failed to create employee');
      }
    },
  },
};

module.exports = resolvers;
