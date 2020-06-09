import React from 'react'
import './ContactFooter.scss'
import Fade from 'react-reveal/Fade'
const ContactFooter = (props) =>
{
    return (
        <div id='contact-wrapper'>
            <Fade bottom><h1 className='white'>CONTACT</h1></Fade>
            <Fade left big><form id='contact-form' 
                className='flex flex-column items-center pa4 white b'>
                <div>
                <div className='flex flex-column'>
                    <label>Name</label>
                    <input type='text'></input>
                </div>
                
                <div className='flex flex-column'>
                    <label>Email or phone</label>
                    <input type='text'></input>
                </div>

                <div className='flex flex-column'>
                    <label>Subject</label>
                    <input type='text'></input>
                </div>
                </div>

                <div>
                <div className='flex flex-column'>
                    <label>Message</label>
                    <textarea cols='24' rows='5'></textarea>
                </div>

                <button id='submit-button' className='ba ma2 pa2 br3 b pointer grow'>Submit</button>
                </div>
            </form></Fade>
        </div>
    )
}

export default ContactFooter;