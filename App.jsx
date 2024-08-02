import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/campus/campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contacts from './Components/Contact/contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/videoplayer'

const App = () => {

  const [playState, setPlayState] = useState(false);


    return (
        <div>
          <Navbar/>
          <Hero/>
          <div className="container">
            <Title subTitle = 'OUR PROGRAM' title='What We offer'/>
          <Programs/>
          <About setPlaystate={setPlayState} />
          <Title subTitle = 'Gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle = 'TESTIMONIAL' title='Students Kya bol rahe hai'/>
         <Testimonial/>
         <Title subTitle = 'Contact us' title='Get in Touch'/>
         <Contacts/>
         <Footer/>
          </div>
          <Videoplayer playState={playState} setPlayState={setPlayState}/>
        </div>
    )
}

export default App