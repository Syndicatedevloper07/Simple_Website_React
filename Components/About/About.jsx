import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=> {setPlayState(true)}}/>

        </div>
        < div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing kal ke leaders aaj</h2>
        <p> humare saath aajo humari journey mein hum tumhe kuch bhi banadengye par tum feees phele bharna padega saare semester ka ek saath aur agar koi sem mein kt aagayii toh woh semester ki puri fees deni padegi</p>
        <p> humare saath aajo humari journey mein hum tumhe kuch bhi banadengye par tum feees phele bharna padega saare semester ka ek saath aur agar koi sem mein kt aagayii toh woh semester ki puri fees deni padegi</p>
        <p> humare saath aajo humari journey mein hum tumhe kuch bhi banadengye par tum feees phele bharna padega saare semester ka ek saath aur agar koi sem mein kt aagayii toh woh semester ki puri fees deni padegi</p>
        </div>
    </div>
  )
}

export default About