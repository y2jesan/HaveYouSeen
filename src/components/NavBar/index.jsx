﻿import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useSelector } from 'react-redux';

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
	const isLogged = useSelector((state) => state.isLogged);
	return (
		<React.Fragment>
			<div className={styles.skipLink}>
				<a href="#mainContent">Skip to Main Content</a>
			</div>
			<nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
				<Link className="navbar-brand" to="/">
					HaveYouSeen
				</Link>
				<div className="navbar-nav">
					<Link className="nav-item nav-link active" to="/Home">
						Home
					</Link>
					<Link className="nav-item nav-link active" to="/MostPopular">
						MostPopular
					</Link>
					{isLogged ? (
						<Link className="nav-item nav-link active" to="/UserProfile">
							UserProfile
						</Link>
					) : (
						<Link className="nav-item nav-link active" to="/UserProfile">
							Log In
						</Link>
					)}
				</div>
			</nav>
		</React.Fragment>
	);
};
export default NavBar;
