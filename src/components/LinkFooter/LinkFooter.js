import React from 'react'
import './LinkFooter.scss'
import FacebookLogo from './../../assets/facebook-logo-white.png'
import LinkedInLogo from './../../assets/linkedin-logo-white.png'
import GithubLogo from './../../assets/github-logo-white.png'
const LinkFooter = (props) =>
{
    return (
        <div style={{height: 100}} className='pa4 bg-mid-gray flex w-100 justify-center'>
            <a href='https://www.facebook.com/tommy.tran.313924'>
                <img src={FacebookLogo} 
                    alt='facebook logo' className='grow link-icon pointer'
                    width='32px' height='32px'></img>
            </a>

            <a href='https://www.linkedin.com/in/khoa-tran-3b4b80178/'>
            <img src={LinkedInLogo} 
                alt='linkedin logo' className='grow link-icon pointer'
                width='32px' height='32px'></img>
            </a>

            <a href='https://github.com/KuhnTran'>
                <img src={GithubLogo} 
                alt='github logo' className='grow link-icon pointer' 
                width='32px' height='32px'></img>
            </a>
        </div>
    );
}

export default LinkFooter;