import "bootstrap/dist/css/bootstrap.min.css";
//import Cart from "../Cart/Cart";
import Swal from "sweetalert2";
//import Swal from "sweetalert2/dist/sweetalert2.js";
import { useState } from "react";
const Card = (props) => {
  const [name, setName] = useState({ name: "" });
  const handleClick = () => {
    Swal.fire({
      title: "Alert!",
      text: `${props.name} Added to Cart`,
      icon: "success",
      confirmButtonText: "Ok",
    });
    setName((preValue) => {
      return { ...preValue, name: props.name };
    });
  };
  console.log(name);

  return (
    <div className="Card">
      <div class="card" style={{ width: "22rem", marginBottom: "20px" }}>
        <img
          class="card-img-top"
          src={props.img}
          alt="Card image cap"
          aria-hidden
        />
        <div class="card-body">
          <h5 class="card-title text-center">{props.name}</h5>
          <p class="card-text text-center">Price :{props.detail} ₹</p>
          <button
            className="btn btn-primary btn-lg w-100"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* <span style={{ display: "hidden" }}>
        <Cart name={name} />
      </span> */}
    </div>
  );
};

export default Card;
