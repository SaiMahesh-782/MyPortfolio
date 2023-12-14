import React, { useState, useEffect } from 'react';
import webimage from './images/web developer image.png';
import MERN from './images/FullStackProjects.jpg';

const handleLetsTalkClick = (event) => {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();
  
  // Redirect to the contact page
  window.location.href = '/contact';
};

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(webimage);

  useEffect(() => {
    // Function to change the image after 5 seconds
    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage === webimage ? MERN : webimage));
    };

    // Set up a timer to change the image every 5 seconds
    const imageTimer = setInterval(changeImage, 5000);

    // Clean up the timer on component unmount
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <>
    <div>
      <img src={currentImage} alt="Web Developer" className='Aboutmainimage' />
    </div>
    <div className='HomeContainer'>
    <div className='Mcontainer'>
      <h3 className='h-3'>Hello I'm</h3>
      <h1 className='Name'>Sai Mahesh</h1>
    </div>

    <a href="https://drive.google.com/file/d/11wuKwPSVJ7HIYGpix6IP9gNBTxHEcC_F/view?usp=sharing" target="_blank" rel="noopener noreferrer">
    <button type="submit" id='Submit-button1' >Download CV</button>
    </a>
    <a href="/contact" onClick={handleLetsTalkClick}>
      <button type="submit" id='Submit-button2'>Lets Talk</button>
      </a>
      </div>
    </>
  );
};
