import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from "redux";
import fieldReducer from "./fieldReducer.js";
import App from "./app.jsx";
import "../styles/main.sass";

const store = createStore(fieldReducer);

const render = () => {
	ReactDom.render(
		<App
			store={store}/>,
		document.getElementById("root"));
}

render()

store.subscribe(render);


// export default
