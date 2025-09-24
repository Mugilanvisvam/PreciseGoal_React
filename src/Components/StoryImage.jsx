import React, { useState, useEffect } from "react";
import image1 from "../assets/story1.png"; // Replace with your first image path
import image2 from "../assets/story2.png"; // Replace with your second image path
const StoryImage = () => {
  const images = [
    image1,
    image2 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt={`Story ${currentIndex + 1}`}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default StoryImage;
