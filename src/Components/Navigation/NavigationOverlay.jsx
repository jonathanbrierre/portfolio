import React from 'react';
import { withRouter } from "react-router-dom";

const NavigationOverlay = ({open, history, toggleNavigation}) => {

	const handleNavigation = (route) => {
		const path = `/${route}`;

		if (path !== history.location.pathname) {
			history.push(path);
			document.querySelector('.App').scrollTo(0,0)
		}
		toggleNavigation();
	}

	return (
		<div className={`navigation-overlay ${open ? "active" : ""}`}>
			<h2 className="page-title" onClick={() => handleNavigation("about")}>About</h2>
			<h2 className="page-title" onClick={() => handleNavigation("manifest")}>Manifest</h2>
			<h2 className="page-title" onClick={() => handleNavigation("handbook")}>Personal Handbook</h2>
			<h2 className="page-title" onClick={() => handleNavigation("books")}>Reading List</h2>
			<h2 className="page-title" onClick={() => handleNavigation("projects")}>Engineering</h2>
		</div>
		)
}

export default withRouter(NavigationOverlay);