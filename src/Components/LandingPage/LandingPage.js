import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import { Carousel } from "react-bootstrap";
import Imag1 from "../../image/image1.png";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100 h-20" src={Imag1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-20" src={Imag1} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-20" src={Imag1} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
