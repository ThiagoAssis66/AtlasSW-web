import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/header'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Contacts from './components/contact'
import Footer from './components/footer'


import './App.css';

function App() {
  return (
    <div>
    
      <Header />
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
      
    
    </div>
  );
}

export default App;
