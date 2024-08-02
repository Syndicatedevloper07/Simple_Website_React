import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
          <div className="hero-text">
            <h1>Tum yaha pe aajo tumhara future safe hai</h1>
            <p>
                Hum yaha pe tujhe achhe se padha yengye phir tujhe ek job bhi 
                dilayengye , woh kaha karwayengye woh toh nai batayengye to
                aajana
            </p>
            <button className='btn'>
                Explore more <img src={dark_arrow} alt=""/>
            </button>
          </div>
        </div>
    )
}

export default Hero