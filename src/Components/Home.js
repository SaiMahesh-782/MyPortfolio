import React, { useState, useEffect } from 'react';
import Homeimage from './images/Homeimage.jpg';

export const Home = () => {
  const [title, setTitle] = useState("");
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const titles = ["Full stack developer", "React JS developer"];
    const interval = setInterval(() => {
      setTitle(titles[index]);
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, [index, title]);

  return (
    <>
      <div className="container">
        <img src={Homeimage} alt="Web Developer" className="Aboutmainimage" />
        <div className="text-container">
          <h3>Hello 👏 I'm </h3>
          <h1>Sai Mahesh</h1>
          <h2> I am a 
            <span style={{ color: 'red' }}> {title}</span></h2>
        </div>
      </div>
    </>
  );
};
