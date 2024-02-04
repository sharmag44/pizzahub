import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Card/Card.jsx";
import "./Order.css";
import menuItems from "../Menu/index.js";
const Order = () => {
  return (
    <div className="Order">
      <h3 className="Order__menu">Menu</h3>
      <div className="container">
        <div className="row">
          {menuItems.map((item) =>
            <Card key={item.name} id={item.name} name={item.name} price={item.price} img={item.img} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Order;
