import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide1 from "../assets/img1.jpg";
import Slide2 from "../assets/img2.jpg";
import Slide3 from "../assets/img3.jpg";
import Slide4 from "../assets/img4.jpg";
import "../Components/styles.css"; 

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 carousel-image" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 carousel-image" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 carousel-image" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 carousel-image" src={Slide4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
