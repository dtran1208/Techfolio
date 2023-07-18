import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Duc Tran Portfolio',
      deployedLink: 'https://github.com/dtran1208/Duc-Tran-Portfolio',
      githubLink: 'https://github.com/dtran1208?tab=repositories',
    },
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      {portfolioItems.map((item, index) => (
        <PortfolioItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Portfolio;
