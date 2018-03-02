import * as types from '../action/actionTypes';

// export default  function courseReducer(state = [], action) {
// 	switch(action.type){
// 		case types.CREATE_COURSE:
// 			return [...state,
// 					Object.assign({}, action.course)
// 					];
// 				default:
// 					return state;
// 				}
// 			}

export default function loadCourseReducer(state =[], action){
	switch(action.type){
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;
		default:
			return state;
	}
}
