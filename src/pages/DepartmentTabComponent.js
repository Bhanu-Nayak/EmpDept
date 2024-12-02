import { useEffect, useState } from "react";
import DepartmentService from "../service/DepartmentService";
import { Link } from "react-router-dom";
import SingleDepartment from "./SingleDepartment";
export default function DepartmentTabComponent() {
  const [searchElem, setSearchElem] = useState("");
  const [deptArr, setDeptArr] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  const [dept, setDept] = useState({
    DEPTNO: "",
    DNAME: "",
    LOC: "",
  });
  const [toggle, setToggle] = useState(false);
  const handleView = (dept) => {
    setDept({ ...dept });
    setToggle(true);
  };
  const handleDelete = (id) => {
    console.log("in handle delete");

    DepartmentService.deleteDepartment(id)
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <Link to="/deptform" state={{ abc: false }}>
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
                <Link to={"/deptform"} state={{ deptDetails: dept, abc: true }}>
                  <button
                    type="button"
                    name="edit"
                    id="edit"
                    value="edit"
                    className="btn btn-primary"
                  >
                    edit
                  </button>
                </Link>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  name="Delete"
                  id="Delete"
                  value="Delete"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(dept.DEPTNO);
                  }}
                >
                  delete
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  name="View"
                  id="View"
                  value="View"
                  className="btn btn-secondary"
                  onClick={() => {
                    handleView(dept);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {toggle ? (
        <div>
          <SingleDepartment deptDetails={dept}></SingleDepartment>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              setToggle(false);
            }}
          >
            Hide
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
