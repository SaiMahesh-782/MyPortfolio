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
import SkillsCard from './SkillsCard';

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
    <img src={images[currentImageIndex]} alt='' name="imageI" className='Aboutmainimage' />

    <div className="About-Container">
    {/* <h2>About Me</h2>
    <div className="About-me">
  <div className="left-align">
    <SkillsCard src={pic} name="" />
  </div>
  <div className="About-right">
    <h3>
      Hi, I am Sai Mahesh, a Software Engineer with 2 years of experience in building tech products. I have experience in working in multiple domains, including, but not limited to E-commerce and Henamehcare.
    </h3>
    <h3>
      Experienced in React.js,  Node.js, Express.js, Redux, JavaScript, MySQL, HTML5, CSS, Tailwind CSS,  and Basic knowledge in AWS.
      </h3>
    <h3>
      Highly skilled in building complex, large-scale, and performant web applications. I am a passionate engineer who strives to build pixel-perfect designs and has a strong aptitude for learning new technologies.
    </h3>
  </div>
  </div> */}
  
  <h1>About me</h1>
   
   <div className="About-me">
    <div className="left-align">
    <p>
      Hi, I am Sai Mahesh, a Software Engineer with 2 years of experience in building tech products. I have experience in working in multiple domains, including henamehcare projects, but not limited to E-commerce.
      Experienced in React.js,  Node.js, Express.js, Redux, JavaScript, MySQL, HTML5, CSS, Tailwind CSS,  and Basic knowledge in AWS.
      Highly skilled in building complex, large-scale, and performant web applications. I am a passionate engineer who strives to build pixel-perfect designs and has a strong aptitude for learning new technologies.
    </p>

    

    
    
    </div>
    <div className="right-align"> 

    <img src={pic} alt=""name="" />    

    
    
    </div>
  </div>
</div>




    <div className="skills-container">
      <h1>SKILLS</h1>
      <div className="skills">
      <SkillsCard src={HTML} name="HTML" />
      <SkillsCard src={CSS} name="CSS" />
      <SkillsCard src={JS} name="Javasript" />
      <SkillsCard src={Node} name="Node JS" />
      <SkillsCard src={Express} name="Express" />
      <SkillsCard src={React} name="React" />
      <br />
      <SkillsCard src={Mongo} name="Mongo" />
      <SkillsCard src={SQL} name="SQL" />
      <SkillsCard src={java} name="java" />
      <SkillsCard src={Python} name="Python" />
      <SkillsCard src={C} name="C" />
      <SkillsCard src={AWS} name="AWS" />
    </div>

    </div>
    </>
  );
};

export default About;
