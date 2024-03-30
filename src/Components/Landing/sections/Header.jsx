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
                        Transformational Coach
                        <br />
                        Marketing & Branding Strategist
                        <br />
                        Software Engineer
                        <br />
                        Best-Selling Author
                    </h4>
                </div>
                <div className='book-me-button-container'>
                    <a href="https://calendly.com/jonathanbrierre/one-on-one" target="_blank" rel='noopener noreferrer'> <button>BOOK A FREE DISCOVERY CALL</button></a>
                </div>
            </div>
        </div>
    )
}

export default Header