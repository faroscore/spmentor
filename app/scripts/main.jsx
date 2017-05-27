import React from 'react';
import ReactDom from 'react-dom';


import reducer from "./reducers";
import {createStore} from 'redux';

import Root from "./containers/Root.jsx"


const store = createStore(reducer);

const render = () => {
	ReactDom.render(
		<Root store={store}/>,
		document.getElementById("root")
	)
}

render();

store.subscribe(() => {
	localStorage.setItem('lib', JSON.stringify(store.getState().lib))
})

store.subscribe(render);

