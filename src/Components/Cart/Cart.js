import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import Store from "../../Store/AddToStore"
export default function Cart() {
  const { items, removeItem } = Store((state) => ({
    items: state.items,
    removeItem: state.removeItem,
  }));

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

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
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => <tr>
              <th scope="row">{index + 1}</th>
              <td><img src={item.img} alt={item.img} /></td>
              <td>{item.quantity || 1}</td>
              <td>{item.image}</td>
              <td>{item.price}</td>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
