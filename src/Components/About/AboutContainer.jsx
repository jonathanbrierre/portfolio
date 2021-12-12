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
                    I am Full-Stack with 2+ years experience. I love coding performant frontend applications with React and Redux, as well as the MVC architecture of Ruby on Rails.
                    <br>
                    </br>
                    If you feel I can contribute in the achievement of your goals, feel free to contact me <Link to ='/contact'>here</Link> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About
