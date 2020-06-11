import React from 'react'
import profilePicture from './../../assets/profilePicture.jpg'
import './AboutMePage.scss'
import Fade from 'react-reveal/Fade'

class AboutMePage extends React.Component
{
    render() {
    return (
        <div id='about-wrapper' className='flex flex-column items-center white'>
            <Fade bottom><h1 className='pa4'>ABOUT ME</h1></Fade>
            <div id='content-wrapper'>
                <Fade left><img id='profile-picture' className='ma4 shadow-3'src={profilePicture} alt='profile_picture' width='300' height ='auto'></img></Fade>
                <Fade right><div id='text-wrapper' className='flex flex-column justify-center items-center about'>
                    <p className='ma4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                    <a href='https://docs.google.com/document/d/1VCtA6qsIpz6K1888ua-tP5W_9OKtyhrnPgFCYwmsSUE/edit?usp=sharing' 
                        id='resume-button' className='ma4 pa2 shadow-0 br3 ba grow pointer b'>View Resume</a>
                </div></Fade>
            </div>
        </div>
    )
    }
}

export default AboutMePage;