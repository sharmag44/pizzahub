import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { addToCart } from "../../Store/AddToStore.js"
const Card = (props) => {
    const [product, setProduct] = useState({});
    const handleClick = () => {
        Swal.fire({
            title: "Added to Cart!",
            text: `${props.name} Added to Cart`,
            icon: "success",
            confirmButtonText: "Ok",
        });
        addToCart.addItem({ key: props.key, name: props.name, img: props.img, price: props.price });
        setProduct({ name: props.name, img: props.img, price: props.price });
        console.log(product)
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "22rem", marginBottom: "20px" }}>
                <img
                    className="card-img-top"
                    src={props.img}
                    alt="Card image cap"
                    aria-hidden
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text text-center">Price :{props.price} ₹</p>
                    <button
                        className="btn btn-primary btn-lg w-100"
                        onClick={handleClick}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>)
    // }
    // <div className="Card">
    //     <div className="card" style={{ width: "22rem", marginBottom: "20px" }}>
    //         <img
    //             className="card-img-top"
    //             src={props.img}
    //             alt="Card image cap"
    //             aria-hidden
    //         />
    //         <div className="card-body">
    //             <h5 className="card-title text-center">{props.name}</h5>
    //             <p className="card-text text-center">Price :{props.price} ₹</p>
    //             <button
    //                 className="btn btn-primary btn-lg w-100"
    //                 onClick={handleClick}
    //             >
    //                 Add to Cart
    //             </button>
    //         </div>
    //     </div>
    //     {/* <span style={{ display: "hidden" }}>
    //     <Cart name={name} />
    // </span> */}
    // </div>
    // );
};

export default Card;
