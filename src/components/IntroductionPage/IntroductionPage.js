import React from 'react';
import './IntroductionPage.scss';

const IntroductionPage = (props) =>
{
    return(
        <div style={{ minHeight: '100vh' }} 
            className="flex flex-column 
                mid-gray text-wrapper"
            id='text-wrapper'>
            <div className='flex flex-row'>
                <h1>Hello, my name is&nbsp;</h1>
                <div className='theme-color'>
                    <h1>Harry Khoa</h1>
                </div>
            </div>
            <h1>I am the Developer you need</h1>
            <button className='b mv3 pa3 bg-white ba pointer 
                br3 b12 theme-color'>
                <p className='ma0 pa0'>Contact Me</p>
            </button>
        </div>
    )
}




export default IntroductionPage;