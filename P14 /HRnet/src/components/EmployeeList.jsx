import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees);
      setEmployees(parsedEmployees);
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = () => {
    if (searchTerm === '') {
      return employees;
    }
    const term = searchTerm.toLowerCase();
    return employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(term) ||
        employee.lastName.toLowerCase().includes(term)
    );
  };

  const columns = [
    { name: 'First Name', selector: 'firstName', sortable: true },
    { name: 'Last Name', selector: 'lastName', sortable: true },
    { name: 'Start Date', selector: 'startDate', sortable: true },
    { name: 'Department', selector: 'departement', sortable: true },
    { name: 'Date of Birth', selector: 'dateOfBirth', sortable: true },
    { name: 'Street', selector: 'street', sortable: true },
    { name: 'City', selector: 'city', sortable: true },
    { name: 'State', selector: 'state' , sortable: true},
    { name: 'Zip Code', selector: 'zipCode', sortable: true },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {employees.length > 0 ? (
        <DataTable columns={columns} data={filteredData()} pagination responsive />
      ) : (
        <span>No employees</span>
      )}
      <Link to="/" className="btn btn-primary">
        Create Employee
      </Link>
    </div>
  );
};

export default EmployeeList;
