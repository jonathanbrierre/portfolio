import React, { Component } from 'react'
import NavBar from '../NavBar'
import ReactPlayer from 'react-player'

class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className = 'contactDiv contentContainer' >
                    <h1>7 Principles to Manifestation</h1>
                    <ReactPlayer url="https://www.youtube.com/watch?v=Yph_ty-Eq1Q" width='337px' height='600px'/>
                    <br/>
                    <a className="book-call-button" role="button" href = 'https://calendly.com/jonathanbrierre/one-on-one'  rel="noopener noreferrer" target= '_blank'> <h3>Book a FREE 1 HR Coaching Call</h3></a>
                    <br/>
                    <a href = 'https://www.amazon.com/Jonathan-Brierre/e/B07YHVJ6X3?ref_=dbs_p_ebk_r00_abau_000000' rel="noopener noreferrer" target = '_blank'><h3>Find my book on Amazon</h3></a>
                    <h4 className="pleasure-header">It's always a pleasure to be of great service</h4>
                </div>
            </div>
        )
    }
}

export default Contact
