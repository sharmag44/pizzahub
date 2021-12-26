import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import "./Order.css";
const Order = () => {
  return (
    <div className="Order">
      <h3 className="Order__menu">Menu</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Margherit.jpg"
              name="MARGHERITA"
              detail=" 400"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg"
              name="DOUBLE CHEESE MARGHERITA"
              detail="530"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Farmhouse.jpg"
              name="FARM HOUSE"
              detail="370"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
              name="PEPPY PANEER"
              detail="430"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
              name="MEXICAN GREEN WAVE"
              detail="480"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg"
              name="DELUXE VEGGIE"
              detail="350"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg"
              name="CHEESE N CORN"
              detail="430"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Paneer_Makhni.jpg"
              name="PANEER MAKHANI"
              detail="520"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              img="https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg"
              name="VEGGIE PARADISE"
              detail="750"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
