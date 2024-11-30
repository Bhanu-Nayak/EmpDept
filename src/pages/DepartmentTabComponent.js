import { useEffect, useState } from "react";
import DepartmentService from "../service/DepartmentService";
import { Link } from "react-router-dom";
export default function DepartmentTabComponent() {
  const [searchElem, setSearchElem] = useState("");
  const [deptArr, setDeptArr] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (searchElem === "") setSearchArr([...deptArr]);
    else {
      let newArr = deptArr.filter((dept) =>
        dept.DNAME.toLowerCase().includes(searchElem.toLowerCase())
      );
      setSearchArr(newArr);
    }
  }, [deptArr, searchElem]);
  const handleChange = (e) => {
    setSearchElem(e.target.value);
  };
  const fetchData = () => {
    DepartmentService.getAllDepartments()
      .then((response) => {
        console.log(response.data);
        setDeptArr([...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Link to="/deptform">
        <button type="button" name="add" id="add" value="add">
          Add New Department
        </button>
      </Link>
      &nbsp; Search:{" "}
      <input
        type="text"
        name="search"
        id="search"
        value={searchElem}
        onChange={handleChange}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Department Number</th>
            <th scope="col">Department Name</th>
            <th scope="col">Department Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchArr.map((dept) => (
            <tr key={dept.DEPTNO}>
              <td scope="row">{dept.DEPTNO}</td>
              <td>{dept.DNAME}</td>
              <td>{dept.LOC}</td>
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
