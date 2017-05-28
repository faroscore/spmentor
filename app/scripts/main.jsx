import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from "containers/App.jsx"
import reducer from "./reducers";
import {createStore} from 'redux';
import {setStorageItem} from "utilities/storageHelper.js"

const store = createStore(reducer);
const render = () => {
	ReactDom.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById("root")
		)
}

render();

store.subscribe(() => {
	setStorageItem('lib', JSON.stringify(store.getState().lib));
})

store.subscribe(render);

