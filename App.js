import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import About from './src/pages/About';
import Portfolio from './src/pages/Portfolio';
import Contact from './src/pages/Contact';
import Resume from './src/pages/Resume';

const App = () => {
  return (
    <Router>
  <div>
    <Header />

    <Route exact path="/" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />

    <Footer />
  </div>
</Router>
  );
};

export default App;
