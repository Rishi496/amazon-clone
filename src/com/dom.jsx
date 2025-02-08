import React from 'react'
import '../css/rightside.css'
import first from '../image/mobileimage1.jpg'
import second from '../image/mobileimage2.jpg'
import third from '../image/mobileimage3.jpg'
import four from '../image/mobileimage4.jpg'
import five from '../image/mobileimage5.jpg'
import download from '../image/download.png'

const Rightside = () => {
    const images = [first, second, third, four, five];
      const [selectedImage, setSelectedImage] = useState(images[0]);
      const zoomRef = useRef(null);

      const handleMouseMove = (e) => {
        if (!zoomRef.current) return;
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
      };
    
  return (
    <div className='main1'>
        <div className="image1">
        <div className="image2">
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
      ----------------------------------------
        </div>
        <div className="image2">
        <div className="download">
            <img src={download} alt="" />
            </div>
            <img src={first} alt="" />
        </div>
    </div>
  )
}

export default Rightside
