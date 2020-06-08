import React from 'react'
import profilePicture from './../../assets/profilePicture.jpg'
import './AboutMePage.scss'

const AboutMePage = (props) =>
{
    return (
        <div id='about-wrapper' className='flex flex-column items-center white'>
            <h1 className='pa4'>ABOUT ME</h1>
            <div id='content-wrapper'>
                <img className='ma4 shadow-3'src={profilePicture} alt='profile_picture' width='300' height ='auto'></img>
                <div id='text-wrapper' className='flex flex-column justify-center items-center about'>
                    <p className='ma4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                    <button id='resume-button' className='ma4 pa2 shadow-0 br3 ba grow pointer b'>View Resume</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;