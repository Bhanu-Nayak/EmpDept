import axios from "axios";
let baseUrl = "http://localhost:4002/";
class DepartmentService {
  getAllDepartments() {
    return axios.get(baseUrl + "departments");
  }
  addDepartment(dept) {
    let myheader = { "content-Type": "application/json" };
    return axios.post(baseUrl + "departments/" + dept.DEPTNO, dept, {
      headers: myheader,
    });
  }
}
export default new DepartmentService();
