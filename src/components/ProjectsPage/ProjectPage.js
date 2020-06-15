import React from 'react'
import facialRecognitionImg from './../../assets/facial_recognition.png'
import webGLProjectImg from './../../assets/WebGLProject.JPG'
import './ProjectPage.scss'
import Fade from 'react-reveal/Fade'

const ProjectsPage = (props) =>
{
    return (
        <div className='mt4 flex flex-column items-center mid-gray'>
            <Fade to big><h1>PROJECTS</h1></Fade>

            {/*==========================First Project==================*/}
            <div id='project-content' className='ma4'>
                <div className='flex flex-column'>
                    <Fade left><h2>Facial Recognition WebApp</h2></Fade>
                    <Fade left><p id='description'>{facialDescription}</p></Fade>
                    <Fade bottom big><div className='flex flex-row'>
                        <a className='whiteBackground ba pa3 b br3 ma1 pointer'
                            href='https://obscure-gorge-95036.herokuapp.com/'>Live Demo</a>
                        <a id='source-button' className='grow b ma1 pointer'
                            href='https://github.com/KuhnTran/facial_recognition'>Source Code</a>
                    </div></Fade>
                </div>
                <div className='flex flex-column justify-center items-center'>
                <Fade right big><img id='project-img' className='shadow-3 grow' 
                    src={facialRecognitionImg} alt='Facial Recognition App' 
                    width='700' heigh='auto'></img></Fade>
                </div>
            </div>

            {/*==========================Second Project==============================*/}
            <div id='project-content' className='ma4'>
                <div className='flex flex-column'>
                    <Fade left><h2>WebGL Final Project</h2></Fade>
                    <Fade left><p id='description'>{webGLProjectDescription}</p></Fade>
                    <Fade bottom big><div className='flex flex-row'>
                        <a className='whiteBackground ba pa3 b br3 ma1 pointer'
                            href='https://kuhntran.github.io/WebGL_Final_Project/'>Live Demo</a>
                        <a id='source-button' className='grow b ma1 pointer'
                            href='https://github.com/KuhnTran/WebGL_Final_Project'>Source Code</a>
                    </div></Fade>
                </div>
                <div className='flex flex-column justify-center items-center'>
                <Fade right big><img id='project-img' className='shadow-3 grow' 
                    src={webGLProjectImg} alt='Facial Recognition App' 
                    width='700' heigh='auto'></img></Fade>
                </div>
            </div>

        </div>
    )
}

const facialDescription = `This fullstack webapp is built using React. It detects the faces that are within the image links which the users provide and logs the number of entries they have made. This is possible thanks to the Express.js backend server communicating with postgreSQL to store each user's information, protecting it using Bcrypt encryption. Both the frontend webapp and the backend server are hosted on Heroku.`
const webGLProjectDescription = `This project's goal is to create a simple scene using WebGL. This is the final project of CS112 - Introduction to Computer Graphics class. Concepts of Computer Graphics such as simple modelling, model transformations, view transformation, animating, shading, lighting are demonstrated.`
export default ProjectsPage;