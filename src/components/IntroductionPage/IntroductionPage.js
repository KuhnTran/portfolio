import React from 'react';
import './IntroductionPage.css';

const IntroductionPage = (props) =>
{
    return(
        <div style={{ minHeight: '100vh' }} 
            className="flex flex-column justify-center items-start pl7 mid-gray">
            <h1>Hello, my name is Khoa.</h1>
            <h1>I am the Developer you need.</h1>
            <button className='pa3 bg-white ba grow'>Contact Me</button>
        </div>
    )
}




export default IntroductionPage;