import  React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import AboutPage from './component/about/AboutPage';
import HomePage from './component/home/HomePage';
import CoursePage from './component/course/CoursePage';

export default (
	<Route path="/" component={App}>
	<IndexRoute component={HomePage}/>
	<Route path="/about" component={AboutPage}/>
	<Route path="/course" component={CoursePage}/>
	</Route>
);