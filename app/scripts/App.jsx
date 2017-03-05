import React from 'react';
import ReactDom from 'react-dom';
import libraryStore from './libraryStore.jsx';

// MODULES
import AddBook from './AddBook.jsx';
import Filter from './Filter.jsx';
import Library from './Library.jsx';

// STYLES
import "../styles/main.sass";

class App extends React.Component {
	render() {
			return (
				<div className="flex">
					<div>
						<AddBook
							libraryStore = {libraryStore}/>
						<Filter 
							libraryStore = {libraryStore}/>
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

const render = () => {
	ReactDom.render(<App/>, document.getElementById("root"));
}

render();
libraryStore.subscribe(render);

export default App;