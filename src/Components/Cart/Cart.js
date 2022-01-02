import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import pricelist from "../Cart/pricelist";
export default function Cart({ name }) {
  return (
    <div className="Cart">
      <div className="Cart__list">
        <h3 className="Cart__list">Cart List</h3>
        <table className="table w-50 m-auto">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            {name &&
              name.map((item) => {
                return (
                  <div>
                    <td>{item}</td>
                    <td>{pricelist[item]}</td>
                  </div>
                );
              })}
          </tr>
        </table>
      </div>
    </div>
  );
}
