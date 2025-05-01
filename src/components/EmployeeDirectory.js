// import React from 'react';
// import EmployeeSearch from '../components/EmployeeSearch';
// import EmployeeTable from '../components/EmployeeTable';
// import EmployeeCreate from '../components/EmployeeCreate';

// function EmployeeDirectory() {
  
//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Employee Management System</h1>
      
//       {/* Employee Search */}
//       <div className="row mb-4">
//         <div className="col-md-6 mx-auto">
//           <EmployeeSearch />
//         </div>
//       </div>
      
//       {/* Employee Table */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <EmployeeTable />
//         </div>
//       </div>

//       {/* Employee Create */}
//       <div className="row mb-4">
//         <div className="col-md-8 mx-auto">
//           <EmployeeCreate />
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default EmployeeDirectory;
// import React, { useState } from 'react';
// import EmployeeSearch from '../components/EmployeeSearch';
// import EmployeeTable from '../components/EmployeeTable';
// import EmployeeCreate from '../components/EmployeeCreate';

// function EmployeeDirectory() {
//   const [employeeType, setEmployeeType] = useState('All');

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Employee Management System</h1>

//       <div className="row mb-4">
//         <div className="col-md-6 mx-auto">
//           <EmployeeSearch />
//         </div>
//       </div>

//       <div className="row mb-4">
//         <div className="col-12">
//           <div className="mb-3">
//             <label>Select Employee Type:</label>
//             <select onChange={(e) => setEmployeeType(e.target.value)} className="form-select">
//               <option value="All">All Employees</option>
//               <option value="FullTime">Full Time</option>
//               <option value="PartTime">Part Time</option>
//               <option value="Contract">Contract</option>
//               <option value="Seasonal">Seasonal</option>
//             </select>
//           </div>
//           <EmployeeTable employeeType={employeeType} />
//         </div>
//       </div>

//       <div className="row mb-4">
//         <div className="col-md-8 mx-auto">
//           <EmployeeCreate />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeDirectory;
import React, { useState } from 'react';
import EmployeeTable from './EmployeeTable';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function EmployeeDirectory() {
  const [employeeType, setEmployeeType] = useState('All');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setEmployeeType(type);
    navigate(`/employees/${type}`);  // Use navigate instead of history.push
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Employee Management System</h1>

      <div className="row mb-4">
        <div className="col-md-4 mx-auto">
          <select value={employeeType} onChange={handleTypeChange} className="form-select">
            <option value="All">All Employees</option>
            <option value="FullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </select>
        </div>
      </div>

      <EmployeeTable employeeType={employeeType !== 'All' ? employeeType : null} />
    </div>
  );
}

export default EmployeeDirectory;
