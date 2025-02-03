// OurDepartments.jsx
import React from 'react';
import DepartmentCard from '../components/departmentCard';
import './OurDepartments.css';

function OurDepartments() {
  const departments = [
    {
      name: 'Design',
      logo: '/path/to/design-logo.svg',
      description: 'The Design department handles visual and creative assets.',
    },
    {
      name: 'Content',
      logo: '/path/to/content-logo.svg',
      description: 'The Content department crafts and manages written content.',
    },
    {
      name: 'Technical',
      logo: '/path/to/content-logo.svg',
      description: 'The Tech team creates and manages websites , provides technical assitance on stage and behind the stage.',
    },
  ];

  return (
    <div className="our-departments">
      <h1>Our Departments</h1>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <DepartmentCard
            key={index}
            name={dept.name}
            logo={dept.logo}
            description={dept.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OurDepartments;
