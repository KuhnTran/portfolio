import React from 'react'
import './NavigationBar.scss'
import anime from 'animejs/lib/anime.es.js'

class NavigationBar extends React.Component
{
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
            <nav className='flex flex-row-reverse mid-gray sticky'>            
                <h2 onClick={()=>{console.log('cliecked')}} className='nav-button pointer'>Awards & Merits</h2>
                <h2 onClick={()=>{console.log('cliecked')}} className='nav-button pointer'>Portfolio</h2>
                <h2 onClick={()=>{console.log('cliecked')}} className='nav-button pointer'>About Me</h2>
                <h2 onClick={()=>{console.log('cliecked')}} className='nav-button pointer'>Hello World</h2>
            </nav>
        );
    }
}

export default NavigationBar;