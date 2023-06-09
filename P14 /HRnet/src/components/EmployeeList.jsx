import  { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees);
      setEmployees(parsedEmployees);
    }
    }, []);

  const columns = [
    { name: 'First Name', selector: 'firstName' },
    { name: 'Last Name', selector: 'lastName' },
    { name: 'Start Date', selector: 'startDate' },
    { name: 'Date of Birth', selector: 'dateOfBirth' },
    { name: 'Street', selector: 'street' },
    { name: 'City', selector: 'city' },
    { name: 'State', selector: 'state' },
    { name: 'Zip Code', selector: 'zipCode' },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      { employees ? (
        <DataTable columns={columns} data={employees} />
      ) : (
        <span>No employees</span>
      )}
      <Link to="/" className="btn btn-primary">Create Employee</Link>
    </div>
  );
};

export default EmployeeList;
