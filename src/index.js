import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './js/app.jsx';
import Operations from './js/mocks/operations.js';
import {reducer} from './js/store/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
	reducer,
	composeWithDevTools()
);


// ReactDOM.render(
// 	<App 
// 		history={Operations}
// 		currencyList={Currencys}
// 	/>,
// 	document.querySelector('#root')
// );

ReactDOM.render(
	<Provider store={store}>
		<App 
			history={Operations}
		/>
	</Provider>,
	document.querySelector(`#root`)
);