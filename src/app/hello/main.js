
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory } from "react-router";
import store from './redux/store';
import RouterMap from './router';

// import 'STATIC/stylus/base';

ReactDOM.render(
	<Provider store={store}>
		<RouterMap history={browserHistory}/>
	</Provider>,
	document.getElementById('app')
);
