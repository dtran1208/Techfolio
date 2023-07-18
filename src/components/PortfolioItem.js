import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <a href={deployedLink}>Deployed App</a>
        <a href={githubLink}>GitHub Repository</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
