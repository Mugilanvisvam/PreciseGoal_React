import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide1 from "../assets/imagethink.png";
import Slide2 from "../assets/imagehappy.png";
import "../Components/styles.css"; 

const StoryImage = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 carousel-image" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 carousel-image" src={Slide2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default StoryImage;
