import React from 'react'
import facial_recognition from './../../assets/facial_recognition.png'
import './ProjectPage.scss'
const ProjectsPage = (props) =>
{
    return (
        <div>
            <div className='mt4 flex flex-column items-center mid-gray'>
                <h1 id='project-header'>PROJECTS</h1>
                <div id='project-content' className='ma4'>
                    <div className='flex flex-column'>
                        <h2>Facial Recognition WebApp</h2>
                        <p id='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                        <div className='flex flex-row'>
                            <button className='whiteBackground ba pa3 b br3 ma1 pointer'>Live Demo</button>
                            <button id='source-button' className='grow b ma1 pointer'>Source Code</button>
                        </div>
                    </div>
                    <div className='flex flex-column justify-center items-center'>
                    <img id='project-img' className='shadow-3 grow' src={facial_recognition} alt='Facial Recognition App' width='700' heigh='auto'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;