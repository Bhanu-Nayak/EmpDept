import axios from "axios";
let baseUrl = "http://localhost:4002";
class EmployeeService {
  getAllEmployees() {
    return axios.get(baseUrl + "/employees");
  }
  addEmployee(emp) {
    let myheaders = { "content-Type": "application/json" };
    return axios.post(baseUrl + "/employees/" + emp.EMPNO, emp, {
      headers: myheaders,
    });
  }
  updateEmployee(emp) {
    let myheaders = { "content-Type": "application/json" };
    return axios.put(baseUrl + "/employees/" + emp.EMPNO, emp, {
      headers: myheaders,
    });
  }
  deleteEmployee(id) {
    return axios.delete(baseUrl + "/employees/" + id);
  }
}

export default new EmployeeService();
