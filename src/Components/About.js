import React from 'react'
import WeatherApp from '../Assets/Weather-App.png'
import { FaAddressCard, FaCss3, FaHtml5, FaJsSquare, FaLaptopCode, FaNode, FaNpm, FaReact, FaSass, FaWrench } from 'react-icons/fa'
import '../Styles/About.css'



const About = () => {
    return (
    <div className="info-boxes">
    <div className="about-container">
        <h1 className="About-title"><FaAddressCard /> About Me</h1>
        <p className="About-text"> Front end developer based in Manchester and hold a Music degree (BA hons) from
                                    Salford University. After a few years out of university, I decided 
                                    a change of direction was needed. I enrolled in the Manchester Codes
                                    bootcamp in 2021 where i went from knowing virtually nothing about code to 
                                    falling in love with it. Enabling me to being both sides of my life
                                    together (the creative and the logical). I'm a huge advocate for self 
                                    development and so try to push my learning as often as i can  </p>
                                    </div>
                                    <div className="tech-container">
        <h1 className="Tech-title"><FaLaptopCode /> Tech Stack</h1>
        <p className="Tech-Stack"> The Langues and Frameworks that I currently work with</p>
        <div className="tech-icons"><FaHtml5 className="HTML" /> <FaCss3 className="css" /> <FaJsSquare className="JS" /> 
                                    <FaReact className="react" /> <FaNode className="node" /> <FaNpm className="npm" /> 
                                    <FaSass className="sass" /> 
                                    </div>
                                    </div>
        <div className="project-container">
        <h1 className="Proj-title"><FaWrench /> Projects</h1>
        <p className="Proj-Stack">Take a look at some of my recent projects</p>
        <a href="https://nostalgic-darwin-080eaa.netlify.app/">
        <img  className="weather-app" src={WeatherApp} alt="weather-app" />
        </a>
        <p className="Weather-text">Weather App - Click the image for live site</p>
        </div>
    </div>

    )
}
export default About