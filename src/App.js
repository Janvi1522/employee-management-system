import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeDirectory from './components/EmployeeDirectory';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeDetails from './components/EmployeeTable'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // <div className="App">
    //   <EmployeeDirectory />
    // </div>
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Employee Management</Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/employees">Employee List</Link>
          <Link className="nav-item nav-link" to="/create-employee">Create Employee</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<EmployeeDirectory />} />
        <Route path="/employees" element={<EmployeeDirectory />} />
        <Route path="/create-employee" element={<EmployeeCreate />} />
        <Route path="/employees/:type" element={<EmployeeDirectory />} /> 
        <Route path="/employee/:id" element={<EmployeeDetails />} /> {/* Route for individual employee details */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
