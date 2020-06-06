import React from 'react';
import './IntroductionPage.css';

const IntroductionPage = (props) =>
{
    const [hovering, setHovering] = React.useState(false);
    return(
        <div style={{ minHeight: '100vh' }} 
            className="flex flex-column justify-center items-start pl7 mid-gray">
            <div className='flex flex-row'>
                <h1>Hello, my name is&nbsp;</h1>
                <div className='gradient-text'>
                    <h1>Khoa</h1>
                </div>
            </div>
            <h1>I am the Developer you need</h1>
            <button className={'b pa3 bg-white ba grow br3 b12 hover-transition'
                + ((hovering) ? ' gradient-background' : ' gradient-text')
                }
                id='contact-button'
                onMouseEnter={()=>{setHovering(true);}}
                onMouseLeave={()=>{setHovering(false);}}>Contact Me</button>
        </div>
    )
}




export default IntroductionPage;