import React from 'react';

// MODULES
import AddBook from 'containers/AddBook';
import Filter from 'containers/Filter';
import Library from 'containers/Library';
import {clearStorage} from "utilities/storageHelper.js"

// STYLES
import "styles/main.sass";

const App = () => (
	<div className="app">
		<div>
			<AddBook/>
			<Filter/>
			<button
				className="btn"
				onClick={() => {
					clearStorage();
					location.reload()
				}}>
				Очистить список
			</button>
		</div>
		<Library/>
	</div>

)
export default App;