import axios from "axios";
let baseUrl = "http://localhost:4002";
class EmployeeService {
  getAllEmployees() {
    return axios.get(baseUrl + "/employees");
  }
}

export default new EmployeeService();
