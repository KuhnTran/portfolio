import React from 'react'
import profilePicture from './../../assets/profilePicture.jpg'
import './AboutMePage.scss'

const AboutMePage = (props) =>
{
    return (
        <div id='about-wrapper' className='flex flex-column items-center white'>
            <h1 className='pa4'>ABOUT ME</h1>
            <div className="flex flex-row justify-center items-center">
                <img className='pa4'src={profilePicture} alt='profile_picture' width='300' height ='auto'></img>
                <p className='pa4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>

            </div>
        </div>
    )
}

export default AboutMePage;