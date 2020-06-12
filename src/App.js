import React, { createRef } from 'react';
import './App.scss';
import IntroductionPage from './components/IntroductionPage/IntroductionPage.js'
import AboutMePage from './components/AboutMePage/AboutMePage.js'
import ProjectsPage from './components/ProjectsPage/ProjectPage.js'
import ContactFooter from './components/ContactFooter/ContactFooter.js'
import LinkFooter from './components/LinkFooter/LinkFooter.js'
import anime from 'animejs'
import 'tachyons'
export default class App extends React.Component {

  aboutMePage = createRef();
  projectsPage = createRef();
  contactFooter = createRef();
  navBar = createRef();

  scrollFunctions = {
    toIntroduction : () => {
      window.scrollTo({top:0, left:0, behavior:'smooth'});
    },

    toAboutMe: () => {
      window.scrollTo(
        {
          top: this.aboutMePage.current.offsetTop - this.navBar.current.offsetHeight, 
          left:0,
          behavior: "smooth"
        });
    },

    toProjects: () => {
      window.scrollTo(
        {
          top: this.projectsPage.current.offsetTop - this.navBar.current.offsetHeight, 
          left:0,
          behavior: "smooth"
        });
    },
    
    toContact: () => {
      window.scrollTo(
        {
          top: this.contactFooter.current.offsetTop - this.navBar.current.offsetHeight, 
          left:0,
          behavior: "smooth"
        });
    },
  }

  componentDidMount()
  {
      anime({
          targets: '.nav-button',
          opacity: 1,
          backgroundColor: 'white',
          duration: 2000,
          easing: 'linear',
          backgroundCOlor: '#FFF',
    });
  }

  render() {
  return (
    <div className="App">

      <nav ref={this.navBar} className='flex flex-row-reverse mid-gray sticky'>            
          <h2 onClick={this.scrollFunctions.toContact} className='nav-button pointer'>Contact</h2>
          <h2 onClick={this.scrollFunctions.toProjects} className='nav-button pointer'>Portfolio</h2>
          <h2 onClick={this.scrollFunctions.toAboutMe} className='nav-button pointer'>About Me</h2>
          <h2 onClick={this.scrollFunctions.toIntroduction} className='nav-button pointer'>Hello World</h2>
      </nav>

      <div><IntroductionPage toAboutMe={this.scrollFunctions.toAboutMe}/></div>
      <div ref={this.aboutMePage}><AboutMePage/></div>
      <div ref={this.projectsPage}><ProjectsPage/></div>
      <div ref={this.contactFooter}><ContactFooter/></div>
      <div><LinkFooter toTop={this.scrollFunctions.toIntroduction}/></div>

    </div>
  );
  }
}

