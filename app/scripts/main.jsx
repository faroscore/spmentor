import React from 'react';
import ReactDom from 'react-dom';

import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import fieldReducer from "./reducers/fieldReducer.js";

import App from "./containers/app.jsx";
import "../styles/main.sass";

const store = createStore(combineReducers({fieldReducer}));


const render = () => {
	ReactDom.render(
		<Provider
			store={store}
		>
			<App/>
		</Provider>,
		document.getElementById("root"));
}

render()

store.subscribe(render);


// export default
