import {createStore, combineReducers} from 'redux';
import assert from 'assert';

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

export default createStore(combineReducers({libraryReducer,filterReducer}));

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