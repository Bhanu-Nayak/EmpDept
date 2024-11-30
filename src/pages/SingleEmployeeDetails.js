import { useLocation } from "react-router-dom";
import "../components/single.css";
export default function SingleEmployeeDetails() {
  const location = useLocation();
  let emp = location.state.empDetails;
  //   console.log(emp);

  return (
    <div class="employee-card">
      <h2>Employee Details</h2>
      <div class="employee-details">
        <p>
          <span>Employee No: {emp.EMPNO}</span>{" "}
        </p>
        <p>
          <span>Name: {emp.ENAME}</span>{" "}
        </p>
        <p>
          <span>Job: {emp.JOB}</span>{" "}
        </p>
        <p>
          <span>Manager: {emp.MGR}</span>{" "}
        </p>
        <p>
          <span>Hire Date: {emp.HIREDATE}</span>{" "}
        </p>
        <p>
          <span>Salary: {emp.SAL}</span>{" "}
        </p>
        <p>
          <span>Commission: {emp.COMM}</span>{" "}
        </p>
        <p>
          <span>Department No: {emp.DEPTNO}</span>{" "}
        </p>
      </div>
    </div>
  );
}
