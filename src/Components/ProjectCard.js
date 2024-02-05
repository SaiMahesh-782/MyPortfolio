import React from 'react';

const ProjectCard = ({ cardimage, carddescription, Github, Online,cardtech }) => {
  const handleGithubClick = () => {
    window.open(Github, '_blank'); // Opens the link in a new tab
  };
  const handleOnlineClick = () => {
    window.open(Online, '_blank'); // Opens the link in a new tab
  };

  return (
    <>
      <div className="project-container">
        <img className="project-image" src={cardimage} alt="Project Preview" />
        <p className='card-description'>{carddescription}</p>
        <p className='card-tech'>TECH USED-{cardtech}</p>
        <div className="project-buttons">
          <button className="project-btn" onClick={handleGithubClick}>
            GITHUB
          </button>
          <button className="project-btn" onClick={handleOnlineClick}>
            GO ONLINE
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
