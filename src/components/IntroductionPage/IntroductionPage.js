import React from 'react';
import './IntroductionPage.scss';
import anime from 'animejs/lib/anime.es.js'
 
class IntroductionPage extends React.Component 
{   
    componentDidMount() {
        anime({
            targets: '.intro',
            translateY: -20,
            opacity: 1,
            backgroundColor: 'white',
            duration: 300,
            easing: 'linear',
            delay: (el, i, l) => { return i*500; }
          });
    }

    render() {
    return(
        <div style={{ minHeight: '100vh'}} 
            className="flex flex-column 
                mid-gray text-wrapper"
            id='text-wrapper'>
            <div id='line-1' className='flex flex-row intro'>
                <h1>Hello, my name is&nbsp;</h1>
                <div className='theme-color'>
                    <h1>Harry Khoa</h1>
                </div>
            </div>
            <h1 className='intro'>I am the Developer you need</h1>
            <button className='b mv3 pa3 bg-white ba pointer 
                br3 b12 theme-color intro whiteBackground'
                onClick={this.props.toAboutMe}>
                <p className='ma0 pa0'>Find out more</p>
            </button>
        </div>
    )
    }
}




export default IntroductionPage;