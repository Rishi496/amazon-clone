import React, { useState, useRef } from "react";
import '../css/rightside.css';
import first from '../image/mobileimage1.jpg';
import second from '../image/mobileimage2.jpg';
import third from '../image/mobileimage3.jpg';
import four from '../image/mobileimage4.jpg';
import five from '../image/mobileimage5.jpg';
import download from '../image/download.png';

const Rightside = () => {
  const images = [first, second, third, four, five];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const zoomRef = useRef(null);

  // Zoom Effect
  const handleMouseMove = (e) => {
    if (!zoomRef.current) return;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div className="main-main">
      {/* Thumbnails */}
      <div className="flex">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="w-16 h-16 border rounded cursor-pointer"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main Image with Zoom */}
      <div
        className="relative w-64 h-64 border overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => (zoomRef.current.style.opacity = 1)}
        onMouseLeave={() => (zoomRef.current.style.opacity = 0)}
      >
        {/* <img src={selectedImage} alt="Main" className="w-full h-full" /> */}
        <div
          ref={zoomRef}
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-0 transition-opacity duration-300"
          style={{ backgroundImage: `url(${selectedImage})`, transform: "scale(2)" }}
        ></div>
      </div>

      {/* Download Section */}
      <div className="image2">
        <div className="download">
          <img src={download} alt="Download" />
        </div>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default Rightside;
