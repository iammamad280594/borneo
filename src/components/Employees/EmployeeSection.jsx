import React from 'react';
import './EmployeeSection.css';
import PropTypes from 'prop-types';

// Import images from assets
import MamadPhoto from '../../assets/mamad.jpg';
import PitterPhoto from '../../assets/pitter.webp';
import RevoPhoto from '../../assets/revo.webp';

const employees = [
  {
    photo: MamadPhoto,
    name: 'Mamad',
    role: 'Manager',
    jobdesc: 'Oversees daily operations, ensures customer satisfaction, manages staff, and handles budgeting and inventory.'
  },
  {
    photo: PitterPhoto,
    name: 'Pitter',
    role: 'Bartender',
    jobdesc: 'Prepares and serves drinks, maintains bar stock, engages with customers, and ensures a clean and safe bar environment.'
  },
  {
    photo: RevoPhoto,
    name: 'Revo',
    role: 'Chef',
    jobdesc: 'Plans and prepares meals, maintains kitchen hygiene, manages kitchen staff, and ensures food quality and consistency'
  }
];

const EmployeeCard = ({ photo, name, role, jobdesc }) => (
  <div className="card">
    <img src={photo} alt={`${name}'s photo`} className="card-img"  />
    <div className="card-info">
      <h3 className="card-name">{name}</h3>
      <p className="card-role">{role}</p>
      <p className="card-jobdesc">{jobdesc}</p>
    </div>
  </div>
);

// Define PropTypes for EmployeeCard
EmployeeCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  jobdesc: PropTypes.string.isRequired
};

const EmployeeSection = () => (
  <div className="employee-section">
    {employees.map((employee, index) => (
      <EmployeeCard 
        key={index} 
        photo={employee.photo} 
        name={employee.name} 
        role={employee.role} 
        jobdesc={employee.jobdesc} 
      />
    ))}
  </div>
);

export default EmployeeSection;
