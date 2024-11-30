import { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link } from "react-router-dom";
export default function EmployeeTabComponent() {
  //Define state array
  const [empArr, setEmpArr] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  //initialization
  useEffect(() => {
    //initialize empArr
    fetchData();
  }, []);
  useEffect(() => {
    setSearchArr([...empArr]);
  }, [empArr]);
  const fetchData = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmpArr([...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Link to="/form">
        <button type="button" name="add" id="add" value="add">
          Add New Employee
        </button>
      </Link>
      &nbsp; Search: <input type="text" name="search" id="search" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Employee Number</th>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Manager ID</th>
            <th scope="col">HireDate</th>
            <th scope="col">Salary</th>
            <th scope="col">Commission</th>
            <th scope="col">Department Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {searchArr.map((emp) => (
            <tr key={emp.EMPNO}>
              <td scope="row">{emp.EMPNO}</td>
              <td>{emp.ENAME}</td>
              <td>{emp.JOB}</td>
              <td>{emp.MGR}</td>
              <td>{emp.HIREDATE}</td>
              <td>{emp.SAL}</td>
              <td>{emp.COMM}</td>
              <td>{emp.DEPTNO}</td>
              <td>
                <button
                  type="button"
                  name="edit"
                  id="edit"
                  value="edit"
                  className="btn btn-primary"
                >
                  edit
                </button>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  name="Delete"
                  id="Delete"
                  value="Delete"
                  className="btn btn-danger"
                >
                  delete
                </button>{" "}
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  name="View"
                  id="View"
                  value="View"
                  className="btn btn-secondary"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
