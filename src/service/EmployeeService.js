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
}

export default new EmployeeService();
