import React, { useEffect, useRef } from 'react'

function Header({ setTurnBurgerWhite }) {

    const observerRef = useRef(null)

    useEffect(() => {
        const headerObserver = new IntersectionObserver(
            function (entries) {
                if (entries[0].isIntersecting === true) {
                    setTurnBurgerWhite(true)
                } else {
                    setTurnBurgerWhite(false)
                }
            },
            { threshold: [0.9] }
        );
        if (observerRef.current) {
            headerObserver.observe(observerRef.current)
        }

        return () => {
            headerObserver.disconnect()
        }
    }, [observerRef, setTurnBurgerWhite])

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
            <div ref={observerRef} className="bottom-observer"></div>
        </div>
    )
}

export default Header