import React from 'react';
import ReactDom from 'react-dom';
import {connect} from "react-redux";
import * as actions from "../actions";

// MODULES
import AddBook from '../components/AddBook.jsx';
import Filter from '../components/Filter.jsx';
import Library from '../components/Library.jsx';

// STYLES
import "../../styles/main.sass";

class App extends React.Component {
	render() {
			let props = this.props;
			return (
				<div className="flex">
					<div>
						<AddBook
							addBook = {
								(title,pages,in_stock) =>  props.addBook(title,pages,in_stock)
								}
							changeBook = {
								(index,title,pages,in_stock) => props.changeBook(index,title,pages,in_stock)
							}
							/>
						<Filter 
							setFilter = { 
								(value) => props.setFilter(value)
							}/>
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
						books = {props.lib}
						filter = {props.filter}
						removeBook = {(index) => props.removeBook(index)}/>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		lib: state.lib,
		filter: state.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setFilter: (value) => dispatch(actions.setFilter(value)),
		addBook: (title,pages,in_stock) => dispatch(actions.addBook(title,pages,in_stock)),
		changeBook: (index,title,pages,in_stock) => dispatch(actions.changeBook(index,title,pages,in_stock)),
		removeBook: (index) => dispatch(actions.removeBook(index))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

