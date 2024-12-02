import "../components/single.css";
export default function SingleDepartment(props) {
  let dept = props.deptDetails;
  return (
    <div class="employee-card">
      <h2>Employee Details</h2>
      <div class="employee-details">
        <p>
          <span>Department No: {dept.DEPTNO}</span>{" "}
        </p>
        <p>
          <span>Department Name: {dept.DNAME}</span>{" "}
        </p>
        <p>
          <span>Department Job: {dept.SAL}</span>{" "}
        </p>
      </div>
    </div>
  );
}
