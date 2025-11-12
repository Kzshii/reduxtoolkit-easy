import React from 'react';
import './EmployeeCard.css';

function EmployeeCard({ employee }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="employee-card">
      <div className="employee-card-header">
        <img 
          src={employee.avatar} 
          alt={employee.name}
          className="employee-avatar"
        />
        <div className="employee-header-info">
          <h3 className="employee-name">{employee.name}</h3>
          <p className="employee-position">{employee.position}</p>
        </div>
      </div>

      <div className="employee-card-body">
        <div className="employee-info-row">
          <span className="info-label">📧 Email</span>
          <span className="info-value">{employee.email}</span>
        </div>

        <div className="employee-info-row">
          <span className="info-label">🏢 Department</span>
          <span className="info-value">
            <span className="department-badge">{employee.department}</span>
          </span>
        </div>

        <div className="employee-info-row">
          <span className="info-label">💰 Salary</span>
          <span className="info-value salary">{formatCurrency(employee.salary)}</span>
        </div>

        <div className="employee-info-row">
          <span className="info-label">📅 Hire Date</span>
          <span className="info-value">{formatDate(employee.hireDate)}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;

