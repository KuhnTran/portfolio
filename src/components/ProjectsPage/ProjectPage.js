import React from 'react'
import facial_recognition from './../../assets/facial_recognition.png'
import './ProjectPage.scss'
const ProjectsPage = (props) =>
{
    return (
        <div>
            <div className='flex flex-column items-center mid-gray'>
                <h1>PROJECTS</h1>
                <div className='flex flex-row ma4'>
                    
                    <div className='flex flex-column ma4'>
                        <h2>Facial Recognition WebApp</h2>
                        <p style={{width: 600,}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                        <div className='flex flex-row'>
                            <button className='whiteBackground ba'>Live Demo</button>
                            <button className='grow'>Source Code</button>
                        </div>
                    </div>
                    <img className='shadow-3 grow' src={facial_recognition} alt='Facial Recognition App' height='400' width='auto'></img>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;