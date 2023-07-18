import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>

      <h3>Skills:</h3>
      <ul>
        <li>Proficient in HTML, CSS, and JavaScript</li>
        <li>Experience with React.js and other front-end frameworks</li>
        <li>Familiarity with back-end technologies such as Node.js and Express.js</li>
        <li>Strong understanding of responsive web design principles</li>
        <li>Knowledge of version control systems like Git</li>
        <li>Excellent problem-solving and analytical skills</li>
        <li>Strong collaboration and communication abilities</li>
        <li>Continuous learner with a passion for staying up-to-date with the latest web technologies</li>
      </ul>

      <h3>Education:</h3>
      <p>Working on it</p>

      <h3>Experience:</h3>
      <p>Front-end Developer, ABC Company</p>
      <ul>
        <li>Developed and maintained responsive web applications using React.js and Redux</li>
        <li>Collaborated with the back-end team to integrate APIs and optimize application performance</li>
        <li>Conducted code reviews and provided constructive feedback to team members</li>
        <li>Contributed to the improvement of development processes and coding standards</li>
      </ul>

      <h3>Projects:</h3>
    <p>Project 1: Portfolio Website</p>
      <ul>
        <li>Designed and developed a personal portfolio website using HTML, CSS, and JavaScript</li>
        <li>Implemented responsive design for optimal viewing experience across devices</li>
        <li>Showcased projects and provided information about skills and experiences</li>
      </ul>


      <h3>Languages:</h3>
      <p>English</p>
      <p>Vietnamese</p>
    </div>
  );
};

export default Resume;
