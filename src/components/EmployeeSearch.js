import React, { useState } from 'react';

function EmployeeSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
   
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name or department"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default EmployeeSearch;
