import React from "react";
import "./MyHeader.css";
export default function MyHeader() {
  console.log("in header component function");
  return (
    <div>
      <h1
        style={{
          border: "2px red",
          borderStyle: "solid",
          borderRadius: "10px",
          paddingLeft: "350px",
        }}
      >
        Employee Department Management System
      </h1>
    </div>
  );
}
