import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/header/header'
import AboutMe from './components/aboutMe/aboutMe'
import Projects from './components/projetos/projects'
import Contacts from './components/contact/contact'
import Footer from './components/footer/footer'
import Mission from './components/mission/mission'
import Skills from './components/skills/skills'

import './App.css';

function App() {
  return (
    <div>
    
      <Header />
      <AboutMe />
      <Mission />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
         
    
    </div>
  );
}

export default App;
