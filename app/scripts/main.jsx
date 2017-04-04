import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from "./containers/App.jsx"
import reducer from "./reducers";
import {createStore} from 'redux';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const store = createStore(reducer);


const render = () => {
	ReactDom.render(
		<Provider store={store}>
			<Router>
				<div>
					<Switch>

						<Route
							path="/items/:id"
							render={({match}) =>{
								return <h1>Книга с индексом {match.params.id}</h1>
							}}
						/>

						<Route
							exact
							path="/"
							component={App}
						/>

						<Route
							render={()=><h1>Not found</h1>}
						/>

					</Switch>
					
				</div>
				
			</Router>
		</Provider>,
		document.getElementById("root")
		)
}

render();

store.subscribe(render);
