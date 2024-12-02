import { useEffect, useState } from "react";
import DepartmentService from "../service/DepartmentService";
import { useLocation, useNavigate } from "react-router-dom";
export default function DepartmentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formDetails, setFormDetails] = useState({
    DEPTNO: "",
    DNAME: "",
    LOC: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const addDepartment = (e) => {
    e.preventDefault();
    if (
      formDetails.DEPTNO === "" ||
      formDetails.DNAME === "" ||
      formDetails.LOC === ""
    ) {
      alert("Please Enter all the details");
    } else {
      let dept = {
        DEPTNO: parseInt(formDetails.DEPTNO),
        DNAME: formDetails.DNAME,
        LOC: formDetails.LOC,
      };
      if (location.state.abc) {
        DepartmentService.updateDepartment(dept)
          .then((response) => {
            console.log(response);
            navigate("/departments");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        DepartmentService.addDepartment(dept)
          .then((response) => {
            console.log(response);
            navigate("/departments");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  useEffect(() => {
    setFormDetails({ ...location.state.deptDetails });
  }, []);
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="DEPTNO">DEPARTMENT Number</label>
          <input
            type="text"
            className="form-control"
            id="DEPTNO"
            name="DEPTNO"
            onChange={handleChange}
            value={formDetails.DEPTNO}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ENAME">DEPARTMENT NAME</label>
          <input
            type="text"
            className="form-control"
            id="DNAME"
            name="DNAME"
            onChange={handleChange}
            value={formDetails.DNAME}
          />
        </div>
        <div className="form-group">
          <label htmlFor="LOC">LOCATION</label>
          <input
            type="text"
            className="form-control"
            id="LOC"
            name="LOC"
            onChange={handleChange}
            value={formDetails.LOC}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={addDepartment}
        >
          {location.state.abc ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
