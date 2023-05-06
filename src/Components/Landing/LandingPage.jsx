import React from 'react'
import Header from './sections/Header'
import Bio from './sections/Bio'
import FeaturedWork from './sections/FeaturedWork'
import ChicagoQuote from './sections/ChicagoQuote'
import Services from './sections/Services'
import Footer from './sections/Footer'
import "./landing.css"
import { useEffect } from 'react'

function LandingPage({ setTurnBurgerWhite }) {

    useEffect(() => {
        return () => {
            setTurnBurgerWhite(false)
        }
    }, [setTurnBurgerWhite])
    return (
        <div className="contentContainer landing-page" >
            <Header setTurnBurgerWhite={setTurnBurgerWhite} />
            <Bio />
            <FeaturedWork />
            <ChicagoQuote />
            <Services />
            <Footer />
        </div>
    )
}

export default LandingPage