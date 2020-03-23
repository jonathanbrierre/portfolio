import React from 'react'
import NavBar from '../NavBar'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
            <NavBar/>
            <div className = 'profileDiv'>
                <h1>Hello World!</h1>
                {/* <img src = 'https://images-na.ssl-images-amazon.com/images/I/41FBm7PCIfL._US230_.jpg' alt = ''></img> */}
                <br></br>
                <div className = 'textContainer'>
                    
                    <div className = 'aboutText'> My name is Jonathan Brierre. Thank you for taking the time to check out my portfolio. <br></br> <br></br>
                    I just recently graduated from The Flatiron School and am looking for ways learn and grow more while providing value to your endeavors. If you feel I can help you in achieving your goals, please feel free to contact me <Link to ='/contact'>here</Link> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About
