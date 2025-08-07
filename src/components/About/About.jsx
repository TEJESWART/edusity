import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{
                setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leader Today</h2>
            <p>
                Our university is a place where students can grow and develop their skills, knowledge, and character.
            </p>
            <p>
                We strive to provide a supportive and inclusive environment that fosters academic excellence, creativity, and innovation
            </p>
            <p>
                Our faculty and staff are dedicated to helping students achieve their goals and pursue their passions.
            </p>
        </div>

    </div>
  )
}

export default About