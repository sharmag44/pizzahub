import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { pizzName } from "../Order/Card";
export default function Cart() {
  const [name, setName] = useState("");
  return (
    <div className="Cart">
      <div className="Cart__list">
        <h3 className="Cart__list">Cart List</h3>
        <table className="table">
          <thead>
            <tr>{/* <pizzName.Provider></pizzName.Provider> */}</tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
