import React from 'react';
import ReactDom from 'react-dom';

import {createStore} from "redux";
import {Provider} from "react-redux";

import reducer from "./reducers";

import App from "./containers/app.jsx";
import "../styles/main.sass";

const store = createStore(reducer);


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
