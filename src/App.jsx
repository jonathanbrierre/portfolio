import React, { useState, useLayoutEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import NavigationOverlay from './Components/Navigation/NavigationOverlay';
import NavBar from './Components/Navigation/NavBar';
import About from './Components/About/AboutContainer';
import Contact from './Components/ContactMe/ContactContainer';
import ProjectsContainer from './Components/Projects/ProjectsContainer';
import ReadingList from './Components/ReadingList/ReadingList';
import OptinPage from './Components/Optin/OptinPage';
import HandbookPage from './Components/Handbook/HandbookPage';
import MethodPage from './Components/Method/MethodPage'
import Catalog from './Components/Meditations/Catalog';
import AffilitatePage from './Components/Affiliates/AffilitatePage';
import LandingPage from './Components/Landing/LandingPage';

function App({ location }) {
  const [openNav, setOpenNav] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [turnBurgerWhite, setTurnBurgerWhite] = useState(false);

  useLayoutEffect(() => {
    if (location.pathname === '/optin') {
      setShowNav(false)
    }
  }, [location.pathname])


  const handleNavigationToggle = () => {
    setOpenNav(prevNav => !prevNav);
  };

  return (
    <div className="App" style={{ overflow: openNav ? "hidden" : "scroll" }}>
      {showNav && (
        <>
          <NavBar openNav={openNav} handleNavigationToggle={handleNavigationToggle} turnBurgerWhite={turnBurgerWhite} />
          <NavigationOverlay open={openNav} toggleNavigation={handleNavigationToggle} />
        </>
      )}
      <Switch>
        <Route exact path='/' render={routerProps => <LandingPage setTurnBurgerWhite={setTurnBurgerWhite} />} />
        <Route exact path='/about' render={routerProps => <LandingPage setTurnBurgerWhite={setTurnBurgerWhite} />} />
        <Route exact path='/oldabout' render={routerProps => <About />} />
        <Route exact path='/network' render={routerProps => <Contact />} />
        <Route exact path='/manifest' render={routerProps => <Contact />} />
        <Route exact path='/handbook' render={routerProps => <HandbookPage />} />
        <Route exact path='/me' render={routerProps => <Contact />} />
        <Route exact path='/projects' render={routerProps => <ProjectsContainer />} />
        <Route exact path='/books' render={routerProps => <ReadingList />} />
        <Route exact path='/optin' render={routerProps => <OptinPage />} />
        <Route path='/method/:view' render={routerProps => <MethodPage {...routerProps} />} />
        <Route path='/meditations' render={routerProps => <Catalog />} />
        <Route path='/affiliate/:partner' render={routerProps => <AffilitatePage {...routerProps} />} />
      </Switch>
      <div style={{
        padding: "177.78% 0 0 0",
        position: " relative"
      }}><iframe src="https://myagencycoach.agency/fe/RL5Rv6jo?clsBtn=0" frameborder="0" scrolling="yes" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}></iframe></div>
    </div>
  );
}

export default withRouter(App);
