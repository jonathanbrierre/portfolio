import React from 'react'

function Header() {
    return (
        <div className='header-container' >
            <div className="text-container">
                <div className='my-name'>
                    <h1>Jonathan <br /> Brierre</h1>
                </div>
                <div className='whoami'>
                    <h4 >
                        Stoic Author & Mentor
                        <br />
                        Public Speaker
                        <br />
                        Marketing & Branding Director
                        <br />
                        Software Engineer
                    </h4>
                </div>
                <div className='book-me-button-container'>
                    <a href="https://calendly.com/jonathanbrierre/one-on-one" target="_blank" rel='noopener noreferrer'> <button> BOOK ME</button></a>
                </div>
            </div>
        </div>
    )
}

export default Header