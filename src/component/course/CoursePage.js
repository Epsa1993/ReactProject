import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as courseAction from '../../action/courseAction';
import CourseList from './CourseList';

// import CSSModules from 'react-css-modules';

class CoursePage extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			course: {title: null}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	onClickSave(){
		// alert(`saving ${this.state.course.title}`);
		//this.props.createCourse(this.state.course);
		// createCourse: course =>dispatch(courseAction.createCourse(course)) (in dispatch fun just for ref)
		this.props.actions.createCourse(this.state.course);
	}


	render(){
    const {courses} =this.props;

		return(
			<div className="container">
				<h1>Courses</h1>
				<h2>Add Courses</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}
				/>

				<input
					type="submit"
					value="save"
					onClick={this.onClickSave}
				/>
        <CourseList courses={ courses }></CourseList>
			</div>

		);

	}
}

function mapStateToProps(state, ownProps){
  console.log(state);
	return {
		courses: state.course
	};
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(courseAction, dispatch)
	};
}

CoursePage.propType = {
	dispatch: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired,
	createCourse: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
