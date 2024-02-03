import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import { addToCart } from "../../Store/AddToStore"
export default function Cart({ name }) {
  return (
    <div className="Cart">
      <div className="Cart__list">
        <h3 className="Cart__list">Cart List</h3>
        <table className="table w-50 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pizza</td>
              <td>dksldlskldks</td>
              <td>100</td>
              <td>{addToCart.items}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
