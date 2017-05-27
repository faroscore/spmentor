import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "../components/App.jsx"
import Book from "../components/Book.jsx"


const Root = ({store}) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route
					exact
					path="/"
					component={App}
				/>
				
				<Route
					path="/items/:id"
					render={({match}) => 
						<Book
							book={store.getState().lib[match.params.id-1]}
						/>
					}
				/>
			</div>
		</Router>
	</Provider>
);

export default Root;