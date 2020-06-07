import React from 'react';
import './App.css';
import IntroductionPage from './components/IntroductionPage/IntroductionPage.js'
import NavigationBar from './components/NavigationBar/NavigationBar.js'
import 'tachyons'
import anime from 'animejs/lib/anime.es.js'

function App() {




  return (
    <div className="App">
      <NavigationBar id='introduction-text'/>
      <IntroductionPage/>
    </div>
  );
}

export default App;
