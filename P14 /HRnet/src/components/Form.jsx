import { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  useEffect(() => {
    const statesOptions = states.map(state => ({
      value: state.abbreviation,
      label: state.name
    }));
    setStatesOptions(statesOptions);
  }, []);

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      street,
      city,
      state: selectedState.value,
      zipCode
    };

    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));


    // Reset form fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('department').value = '';
    document.getElementById('street').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zip-code').value = '';
    setSelectedState(null);
    setStartDate(null);
    setDateOfBirth(null);
  };

  const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
    ];
  const [statesOptions, setStatesOptions] = useState([]);

  return (
    <div className="form-container">
    <Link to="/list" className="btn btn-primary">Employees List</Link>
      <h1>Create Employee</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            className="form-control"
            selected={dateOfBirth}
            onChange={date => setDateOfBirth(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            className="form-control"
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <Select
           styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor:"#444;",
            }),
          }}
            id="state"
            className="form-control"
            value={selectedState}
            onChange={state => setSelectedState(state)}
            options={statesOptions}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip-code">Zip Code</label>
          <input type="text" id="zip-code" className="form-control" />
        </div>
        <button type="button" className="btn btn-primary" onClick={saveEmployee}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
