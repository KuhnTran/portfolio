import React from 'react'
import facial_recognition from './../../assets/facial_recognition.png'

const ProjectsPage = (props) =>
{
    return (
        <div>
            <div className='flex flex-column items-center mid-gray'>
                <h1>PROJECTS</h1>
                <div className='flex flex-row'>
                    
                    <div className='flex flex-column'>
                        <h2>Facial Recognition Webapp</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                        <div className='flex flex-row'>
                            <button>Live Demo</button>
                            <button>Source Code</button>
                        </div>
                    </div>
                    <img src={facial_recognition} alt='Facial Recognition App'></img>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;