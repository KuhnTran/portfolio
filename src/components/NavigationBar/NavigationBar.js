import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'

class NavigationBar extends React.Component
{
    componentDidMount()
    {
        anime({
            targets: '',
            opacity: 1,
            backgroundColor: 'white',
            duration: 3000,
            easing: 'linear',
            backgroundCOlor: '#FFF',
      });
    }
    render() {
    return (
        <h1 style={{opacity: 0}} id='nav-bar'>
            Navigation Bar
        </h1>
    )
    }
}

export default NavigationBar;