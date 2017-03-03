import React from 'react';
import ReactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
import assert from 'assert';

import "../styles/main.sass";

const libraryReducer = (state = JSON.parse(localStorage.getItem("libraryReducer")) || [], action) => {
	switch(action.type){
		case 'ADD_BOOK':
			return [
				...state,
				{
					title: action.title
				}
			]
		default:
			return state;
	}
}

const filterReducer = (state = "", action) => {
	switch(action.type){
		case 'SET_FILTER':
			return action.filter;
		case 'REMOVE_FILTER':
			return "";
		default:
			return state;
	}

}

var libraryStore = createStore(combineReducers({libraryReducer,filterReducer}));

const addBookToEmptyTest = () => {

	var beforeState = [];

	var afterState = [{
			title: "title"
		}];

	assert.deepEqual(libraryReducer(beforeState,{type: 'ADD_BOOK',title : "title"}),afterState);
	console.log("AddBookToEmptyTest passed");
};

const addBookToNotEmptyTest = () => {

	var beforeState = [{
			title: "title 1"
		}];

	var afterState = [{
			title: "title 1"
		},{
			title: "title 2"
		}];

	assert.deepEqual(libraryReducer(beforeState,{type: 'ADD_BOOK',title : "title 2"}),afterState);
	console.log("AddBookToNotEmptyTest passed");
};

const setFilterTest = () => {

	var beforeState = "";

	var afterState = "filter";

	assert.equal(filterReducer(beforeState,{type: 'SET_FILTER',filter : "filter"}),afterState);
	console.log("setFilterTest passed");
};

const removeFilterTest = () => {

	var beforeState = "filter";

	var afterState = "";

	assert.equal(filterReducer(beforeState,{type: 'REMOVE_FILTER'}),afterState);
	console.log("removeFilterTest passed");
};

addBookToEmptyTest();
addBookToNotEmptyTest();
setFilterTest();
removeFilterTest();


class AddBook extends React.Component{

	constructor(props) {
		super(props);
		this.addBook = this.addBook.bind(this);
	}

	addBook(){
		var val = this.textInput.value;
		if (val){
			libraryStore.dispatch({type: 'ADD_BOOK', title: val})
			this.textInput.value = "";
		}

		var state = JSON.stringify(libraryStore.getState().libraryReducer)
		localStorage.setItem("libraryReducer",state);
	}

	render(){
		return (
			<div>
				<input
					ref={(node) => this.textInput = node}
					placeholder="Введите название книги"
					type="text"
				/>
				<input
					type="submit"
					onClick={this.addBook}
					value="Добавить книгу"
					className="btn"
				/>
			</div>
		)
	}
}

class Filter extends React.Component{

	constructor(props) {
		super(props);
		this.setFilter = this.setFilter.bind(this);
	}

	setFilter(){
		var val = this.textInput.value;
		if (val){
			libraryStore.dispatch({type: 'SET_FILTER', filter: val})
		} else{
			libraryStore.dispatch({type: 'REMOVE_FILTER'})
		}
	}

	render(){
		return (
			<div>
				<input
					ref={(node) => this.textInput = node}
					placeholder="Введите фильтр"
					type="text"
					onChange={this.setFilter}
				/>
			</div>
		)
	}
}

class Library extends React.Component{
	render(){
		let books = libraryStore.getState().libraryReducer;
		let filter = libraryStore.getState().filterReducer;
		if (filter){
			books = books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
		}
		return (
			<ul>
				{books.map((book,index) => <li key={index+1}>{book.title}</li>)}
			</ul>
		)
	}

}



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
					<Library/>
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