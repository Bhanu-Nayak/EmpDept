import { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Navigate, useNavigate } from "react-router-dom";

export default function EmployeeForm() {
  const [formDetails, setFormDetails] = useState({
    EMPNO: "",
    ENAME: "",
    JOB: "",
    MGR: "",
    HIREDATE: "",
    SAL: "",
    COMM: "",
    DEPTNO: "",
  });
  const navigate = useNavigate();
  const addEmployee = (e) => {
    e.preventDefault();
    if (
      formDetails.EMPNO === "" ||
      formDetails.ENAME === "" ||
      formDetails.JOB === "" ||
      formDetails.MGR === "" ||
      formDetails.HIREDATE === "" ||
      formDetails.SAL === "" ||
      formDetails.COMM === "" ||
      formDetails.DEPTNO === ""
    ) {
      alert("Please Fill All the details");
    } else {
      let emp = {
        EMPNO: parseInt(formDetails.EMPNO),
        ENAME: formDetails.ENAME,
        JOB: formDetails.JOB,
        MGR: parseInt(formDetails.MGR),
        HIREDATE: formDetails.HIREDATE,
        SAL: parseFloat(formDetails.SAL),
        COMM: parseFloat(formDetails.COMM),
        DEPTNO: parseInt(formDetails.DEPTNO),
      };
      EmployeeService.addEmployee(emp)
        .then((result) => {
          console.log(result);
          navigate("/employees");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="EMPNO">Employee Number</label>
          <input
            type="text"
            className="form-control"
            id="EMPNO"
            name="EMPNO"
            onChange={handleChange}
            value={formDetails.EMPNO}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ENAME">EMPLOYEE NAME</label>
          <input
            type="text"
            className="form-control"
            id="ENAME"
            name="ENAME"
            onChange={handleChange}
            value={formDetails.ENAME}
          />
        </div>
        <div className="form-group">
          <label htmlFor="JOB">JOB</label>
          <input
            type="text"
            className="form-control"
            id="JOB"
            name="JOB"
            onChange={handleChange}
            value={formDetails.JOB}
          />
        </div>
        <div className="form-group">
          <label htmlFor="MGR">MGR</label>
          <input
            type="text"
            className="form-control"
            id="MGR"
            name="MGR"
            onChange={handleChange}
            value={formDetails.MGR}
          />
        </div>
        <div className="form-group">
          <label htmlFor="HIREDATE">HIREDATE</label>
          <input
            type="text"
            className="form-control"
            id="HIREDATE"
            name="HIREDATE"
            onChange={handleChange}
            value={formDetails.HIREDATE}
          />
        </div>
        <div className="form-group">
          <label htmlFor="SAL">SALARY </label>
          <input
            type="text"
            className="form-control"
            id="SAL"
            name="SAL"
            onChange={handleChange}
            value={formDetails.SAL}
          />
        </div>
        <div className="form-group">
          <label htmlFor="COMM">COMMISSION</label>
          <input
            type="text"
            className="form-control"
            id="COMM"
            name="COMM"
            onChange={handleChange}
            value={formDetails.COMM}
          />
        </div>
        <div className="form-group">
          <label htmlFor="DEPTNO">DEPARTMENT</label>
          <input
            type="text"
            className="form-control"
            id="DEPTNO"
            name="DEPTNO"
            onChange={handleChange}
            value={formDetails.DEPTNO}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addEmployee}>
          Submit
        </button>
      </form>
    </div>
  );
}
