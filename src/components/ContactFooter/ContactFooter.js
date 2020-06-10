import React, {useState} from 'react'
import './ContactFooter.scss'
import Fade from 'react-reveal/Fade'
import { useAlert } from 'react-alert'

const ContactFooter = (props) =>
{
    const alert = useAlert();
    const [contactName, setContactName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const onChangeName = (event) => { setContactName(event.target.value); }
    const onChangeContact = (event) => { setContact(event.target.value); }
    const onChangeMessage = (event) => { setMessage(event.target.value); }

    const onSubmit = () =>
    {
        const success = true;
        if (success)
        {
        alert.show(<div id='alert-message'>
            Hello {contactName}, thank you for reaching out to me! <br/>
            Your message has been successfully received! <br/>
            I will try to get back to you ASAP via {contact}! <br/>
            Have a nice day!
        </div>);
        console.log('Name: ' + contactName + '\n' + 'Contact: ' + contact  + '\n' + 'Message: ' + message);
        }
        else alert.show(<div id='alert-message'>Hello {contactName}, thank you for reaching out to me!<br/>
            Unfortunately, your message was not received.<br/>
            Please try again later. <br/>
            I am terribly sorry for the inconvenience.<br/>
            Have a nice day!</div>)
    }

    return (
        <div id='contact-wrapper'>
            <Fade bottom><h1 className='white'>CONTACT</h1></Fade>
            <Fade left big><form id='contact-form' 
                className='flex flex-column items-center pa4 white b'>
                <div>
                <div className='flex flex-column'>
                    <label>Name</label>
                    <input type='text' onChange={onChangeName}></input>
                </div>
                
                <div className='flex flex-column'>
                    <label>Email or phone</label>
                    <input type='text' onChange={onChangeContact}></input>
                </div>

                <div className='flex flex-column'>
                    <label>Subject</label>
                    <input type='text' ></input>
                </div>
                </div>

                <div>
                <div className='flex flex-column'>
                    <label>Message</label>
                    <textarea cols='24' rows='5'
                        onChange={onChangeMessage}></textarea>
                </div>

                <button id='submit-button' className='ba ma2 pa2 br3 b pointer grow'
                    type='reset' onClick={()=>{onSubmit();}}>Submit</button>
                </div>
            </form></Fade>
        </div>
    )
}

export default ContactFooter;