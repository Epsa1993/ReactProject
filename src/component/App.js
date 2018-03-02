import React, {PropTypes} from 'react';

import Header from './common/header';

console.log("App");

class  App extends React.Component {
	render(){
		return(
			<div ClassName="container-fluid">
				<Header />
				{this.props.children}
			</div>
			);
	}
}

App.propTypes = {
	children : PropTypes.object.isRequired
};

export default App;

