import React from 'react';
import ReactDom from 'react-dom';

// MODULES
import AddBook from '../components/AddBook.jsx';
import Filter from '../components/Filter.jsx';
import Library from '../components/Library.jsx';

// STYLES
import "../../styles/main.sass";

class App extends React.Component {
	render() {
			return (
				<div className="flex">
					<div>
						<AddBook/>
						<Filter/>
						<button 
							className="btn" 
							onClick={
								() =>
								{
									localStorage.clear();
									location.reload()
								}
							}>Очистить список</button>
					</div>
					<Library
						libraryStore = {libraryStore}/>
				</div>

			)
	}
}

export default App;