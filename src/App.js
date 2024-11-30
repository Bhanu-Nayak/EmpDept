import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MainNavBar from "./components/MainNavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import EmployeeTabComponent from "./pages/EmployeeTabComponent";
import DepartmentTabComponent from "./pages/DepartmentTabComponent";
import AboutUs from "./pages/AboutUs";
import EmployeeForm from "./pages/EmployeeForm";
import DepartmentForm from "./pages/DepartmentForm";

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/home"></Navigate>}
        ></Route>
        <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
        <Route
          path="/employees"
          element={<EmployeeTabComponent></EmployeeTabComponent>}
        ></Route>
        <Route
          path="/departments"
          element={<DepartmentTabComponent></DepartmentTabComponent>}
        ></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/form" element={<EmployeeForm></EmployeeForm>}></Route>
        <Route
          path="/deptform"
          element={<DepartmentForm></DepartmentForm>}
        ></Route>
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
