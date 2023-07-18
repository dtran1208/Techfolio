import React from 'react';
import './About.css';
import avatarImage from '../images/me.jpg.jpg'

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img src={avatarImage} alt="Avatar" />
      <p>
        Hi, I'm Duc Tran, a passionate web developer with a strong focus on front-end development. I have [X] years of experience in building interactive and responsive websites using modern web technologies like HTML, CSS, and JavaScript.
      </p>
      <p>
        I enjoy turning ideas into beautiful and functional websites. I believe in clean and well-structured code that is easy to maintain and understand. I am always eager to learn and keep up with the latest trends and technologies in the web development industry.
      </p>
      <p>
        In addition to my technical skills, I also have excellent problem-solving and communication skills, which enable me to work effectively in both individual and team environments. I am passionate about collaborating with other developers and creating innovative solutions.
      </p>
      <p>
        I am actively seeking new opportunities to work on exciting projects and contribute to the success of the team.
      </p>
      <p>
        If you'd like to learn more about my work or discuss potential collaboration, feel free to get in touch via the contact form below. I look forward to hearing from you!
      </p>
    </div>
  );
};

export default About;
