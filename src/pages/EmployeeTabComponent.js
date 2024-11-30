import { useEffect, useState } from "react";

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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
