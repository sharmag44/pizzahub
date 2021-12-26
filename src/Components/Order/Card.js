import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
const Card = (props) => {
  const [name, setName] = useState("");
  const pizzaName = useContext(name);
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
            onClick={() => {
              setName(props.name);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
