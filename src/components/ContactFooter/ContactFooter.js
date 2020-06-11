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
    const [isLoading, setIsLoading] = useState(false);

    const onChangeName = (event) => { setContactName(event.target.value); }
    const onChangeContact = (event) => { setContact(event.target.value); }
    const onChangeMessage = (event) => { setMessage(event.target.value); }

    const onSubmit = () =>
    {
        setIsLoading(true);
        fetch('https://vast-waters-61272.herokuapp.com/new-message/', 
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({name: contactName, contact: contact, message: message})
            }).then((res) => res.json()).then(data => {
                setIsLoading(false);
                if (data.status === 'success')
                alert.show(<div id='alert-message'>
                Hello {contactName}, thank you for reaching out to me! <br/>
                Your message has been successfully received! <br/>
                I will try to get back to you ASAP via {contact}! <br/>
                Have a nice day!
                </div>);

                else 
                    alert.show(<div id='alert-message'>Hello {contactName}, thank you for reaching out to me!<br/>
                    Unfortunately, your message was not received.<br/>
                    Please try again later. <br/>
                    I am terribly sorry for the inconvenience.<br/>
                    Have a nice day!</div>);
            }).catch(err => {
                setIsLoading(false);
                alert.show(<div id='alert-message'>Hello {contactName}, thank you for reaching out to me!<br/>
                Unfortunately, your message was not received.<br/>
                Please try again later. <br/>
                I am terribly sorry for the inconvenience.<br/>
                Have a nice day!</div>);
                console.log(err);
            })
            
    }

    const getButton = () => {
        if (isLoading === true)
            return (<div id='loading-button' className='br3 flex flex-rows justify-center items-center b'>
                    <p>Submitting...</p>
                    <div id='spin-load'></div>
                </div>)
        
        else return ( <button id='submit-button' className='ba ma2 pa2 br3 b pointer grow'
                type='reset' onClick={()=>{onSubmit();}}>Submit</button>
            )
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

                {getButton()}
                </div>
            </form></Fade>
        </div>
    )
}

export default ContactFooter;