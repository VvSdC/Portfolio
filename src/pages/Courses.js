import React from 'react'
import Header from '../components/Header.js'
import skillslist from './coursesdata.js';

function Courses() {
    return (
        <div>
            <Header />
            <div className='courses-intro' style={{ backgroundImage: `url('./courses.svg')` }}>
                <div className='courses-intro-content'>
                    <h1>About Me</h1>

                    <div>
                        <p>
                            I am an AI engineer passionate about building responsible and ethical AI solutions. My expertise spans Generative AI, agent workflows with LangChain and LangGraph, and advanced knowledge management using Retrieval-Augmented Generation (RAG). I design collaborative agent systems leveraging Model Context Protocol (MCP) and agent-to-agent (A2A) communication, always prioritizing safety, transparency, fairness, and explainability to ensure reliable outcomes.<br /><br />
                            Beyond AI, I deliver robust, scalable applications using the MERN stack and both SQL and NoSQL databases, including MongoDB and Elasticsearch. My approach combines technical excellence with a commitment to ethical innovation, shaping impactful solutions that drive progress with integrity.
                        </p>

                        <button className='primary-button'><a href='#whyme' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Get Started</a></button>
                    </div>
                </div>
            </div>

            <div className='why-me-parent' id='whyme'>
                <div className='why-me n-box1 flex-with-center'>
                    <h1>Why Me?</h1>
                    <div className='why-me-content'>
                        <p>
                            I bring a unique blend of expertise in responsible AI and full-stack development. My focus on building ethical, secure, and transparent AI systems ensures solutions that are not only innovative but also trustworthy. With a passion for solving complex problems, I deliver impactful technology that drives progress with integrity.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container projects-list'>
                <h3 className='font-bold'>My Skills</h3>
                <hr />

                <div className='row'>
                    {
                        skillslist.map(skill => {
                            return <div className='col-md-4'>
                                <div className='position-relative project'>
                                    <img src={skill.image} alt={skill.title} className='w-100'></img>
                                    <div className='project-content w-100'>
                                        <h3>{skill.title}</h3>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses;