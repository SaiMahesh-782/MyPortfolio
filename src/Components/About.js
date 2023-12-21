import React, { useState, useEffect } from 'react';

import Skills from './images/Skills.png';
import pic from './images/PHOTO.jpg'
import Experience from './images/Experience.png';
import HTML from './images/HTML.png'
import CSS from './images/CSS.png'
import JS from './images/JS.png'
import Node from './images/Nodejs.jpg'
import C from './images/C.png'
import Reat from './images/React.png'
import Express from './images/Express.png'
import AWS from './images/AWS.png'
import Mongo from './images/Mongo db.png'
import Python from './images/Python.jpg'
import SQL from './images/SQL.png'
import java from './images/java.png'

const About = () => {
  const images = [ Skills, Experience];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
    <img src={images[currentImageIndex]} alt="imageI" className='Aboutmainimage' />

    <div className="About-Container">
    <h2>About Me</h2>
    <div className="About-me">
  <div className="left-align">
    <img src={pic} alt="" />
  </div>
  <div className="About-right">
    <h3>
      Hi, I am Sai Mahesh, a Software Engineer with 2 years of experience in building tech products. I have experience in working in multiple domains, including, but not limited to E-commerce and Healthcare.
    </h3>
    <h3>
      Experienced in React.js,  Node.js, Express.js, Redux, JavaScript, MySQL, HTML5, CSS, Tailwind CSS,  and Basic knowledge in AWS.
      </h3>
    <h3>
      Highly skilled in building complex, large-scale, and performant web applications. I am a passionate engineer who strives to build pixel-perfect designs and has a strong aptitude for learning new technologies.
    </h3>
  </div>
  </div>
</div>


    <div className="skills-container">
      <h1>SKILLS</h1>
      <div className="skills">
      <img src={HTML} className="skillimage" alt="Himage" />
      <img src={CSS} className="skillimage" alt="CSS" />
      <img src={JS} className="skillimage" alt="JS" />
      <img src={Node} className="skillimage" alt="N" />
      <img src={Express} className="skillimage" alt="E" />
      <img src={Reat} className="skillimage" alt="R" />
      <br />
      <img src={Mongo} className="skillimage" alt="M" />
      <img src={SQL} className="skillimage" alt="S" />
      <img src={java} className="skillimage" alt="J" />
      <img src={Python} className="skillimage" alt="P" />
      <img src={C} className="skillimage" alt="C" />
      <img src={AWS} className="skillimage" alt="AW" />
    </div>

    </div>
    </>
  );
};

export default About;
