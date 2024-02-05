import React from 'react';
import Webprojects from './images/Web Projects.png';
import ProjectCard from './ProjectCard';
import TaskManager from './images/Task Manager.jpg'
import PIC from './images/foodAppImage.png'
import PIC2 from './images/TravelWebsite.png'
import PIC3 from './images/Calculator.png'
import PIC4 from './images/pic2.png'


const Projects = () => {
  return (
    <>
      <div>
        <img src={Webprojects} alt="projects" className='Aboutmainimage' />
      </div>
      <div className="project-list">
        <ProjectCard cardimage={TaskManager} 
        carddescription="A Task Manager is a digital tool designed to streamline and enhance task organization and productivity. Users can create, categorize, and prioritize tasks, set deadlines, and monitor progress. With features like collaboration, and calendar integration, it facilitates efficient teamwork and ensures tasks are completed in a timely manner, making 
        it an essential tool for individuals and teams striving for effective task management. "
        Github="https://github.com/SaiMahesh-782/TasksT"
        Online="https://saimaheshtask.netlify.app"
        cardtech="MERN STACK,Tailwind CSS"
        />
        <ProjectCard cardimage={PIC} 
         carddescription="A food app which takes information about the restaurant and available items from the LIVE API and show in the form of cards ."
         Github="https://github.com/SaiMahesh-782/Foodapp"
         Online="https://saimaheshfoodapp.netlify.app/"
         cardtech="React ,Redux, TailwindCSS"/>
        <ProjectCard cardimage={PIC2}
        carddescription="A  basic single page website of a travel company with all the records of travel and some basic images. It also contains Q&A of customers
        mainly asked doubts"
        Github="https://github.com/SaiMahesh-782/TravelWebsite"
        Online="https://saimaheshtravlwebsite.netlify.app/"
        cardtech="HTML,CSS"/>
        
        <ProjectCard cardimage={PIC3}
        carddescription="A simple calculator using React js"
        Github="https://github.com/SaiMahesh-782/Calculator"
        Online="https://saimahesh-calculator.netlify.app/"
        cardtech="React Js"/>
          <ProjectCard cardimage={PIC4}
        carddescription="My personal portfolio which consists of my complete education Background. It also contains the details of all my personal projects of live
        and Git links of all the projects. My personal porfolio contains my latest updated resume ."
        Github="https://github.com/SaiMahesh-782/MyPortfolio"
        Online="https://saimaheshwebsite.netlify.app/"
        cardtech="React Js"/>

      </div>
    </>
  );
};

export default Projects;
