import React, { useEffect, useState } from "react";
import API from "../api/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await API.get("/api/employees"); 
        setEmployees(res.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <ul>
          {employees.map((emp, i) => (
            <li key={i}>{emp.name} - ₹{emp.salary},{emp.age}</li>
          ))}
        </ul>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeList;
