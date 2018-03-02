import React from 'react';
import {Link} from 'react-router';
console.log("homepage");
class HomePage extends React.Component {
	render(){
		return(
			<div className="container">
				<h1>PluralSight Administration</h1>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
			);
	}
}

export default HomePage;