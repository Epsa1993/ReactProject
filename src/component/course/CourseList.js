import React, { PropTypes } from 'react';
import CourseRow from './CourseRow';

const CourseList = ({courses}) =>{
	return(
		<div className="table">
			<table>
        <thead>
        <tr>
          <th>&nbsp</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
        </table>
		</div>
		);
};


CourseList.propType = {
	courses: PropTypes.array.isReq
};

export default CourseList;
