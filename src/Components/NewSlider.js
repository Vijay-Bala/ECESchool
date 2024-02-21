import React, { useState, useEffect } from 'react';
import image01 from '../Assets/ECE DEPT PICS.png';
import image02 from '../Assets/ECE DEPT PICS 2.png';
import image03 from '../Assets/ECE DEPT PICS 3.jpg';
import image04 from '../Assets/ECE DEPT PICS 4.jpg';


const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 4);
        setImageOpacity(1); 
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image01, image02, image03, image04];
    return images[index];
  };

  const containerStyle = {
    width:"50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh'
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
  };

  return (
    <div style={containerStyle}>

      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;