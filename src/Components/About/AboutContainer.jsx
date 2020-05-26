import React from 'react'
import NavBar from '../NavBar'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
            <NavBar/>
            <div className = 'profileDiv'>
                <h1>Hello World!</h1>
                <img src = 'https://images-na.ssl-images-amazon.com/images/I/41FBm7PCIfL._US230_.jpg' alt = ''></img>
                <br></br>
                <div className = 'textContainer'>
                    
                    <div className = 'aboutText'> My name is Jonathan Brierre. Thank you for taking the time to check out my portfolio. <br></br> <br></br>
                    I am a published author and a public speaker that has just recently graduated from The Flatiron School. I am looking for ways to learn, grow and share my knowledge with those around me. If you want me to speak at your venue or feel that I can contribute to you in achieving your goals, please feel free to contact me <Link to ='/contact'>here</Link> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About
