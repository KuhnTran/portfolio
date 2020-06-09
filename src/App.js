import React from 'react';
import './App.css';
import IntroductionPage from './components/IntroductionPage/IntroductionPage.js'
import NavigationBar from './components/NavigationBar/NavigationBar.js'
import AboutMePage from './components/AboutMePage/AboutMePage.js'
import ProjectsPage from './components/ProjectsPage/ProjectPage.js'
import AwardsPage from './components/AwardsPage/AwardsPage.js'
import ContactFooter from './components/ContactFooter/ContactFooter.js'
import LinkFooter from './components/LinkFooter/LinkFooter.js'


import 'tachyons'


function App() {

  return (
    <div className="App">

      <NavigationBar/>
      <IntroductionPage/>
      <AboutMePage/>
      <ProjectsPage/>
      <AwardsPage/>

      <ContactFooter/>
      <LinkFooter/>
    </div>
  );
}

export default App;
