import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
console.log("headerPage");

	const Header = () =>{
		return(
			<div className="container">
			<nav>
				<IndexLink to="/">Home</IndexLink>
				{" | "}
				<Link to="/about">About</Link>
				{" | "}
				<Link to="/course">Course</Link>
			</nav>
			</div>
			);
	};

export default Header;