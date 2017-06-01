import React from 'react';
import {connect} from "react-redux";

import {removeBook, setBookToChange} from "actions";
import LibraryView from "components/LibraryView";

class Library extends React.Component {

	render() {
		let {books, filter} = this.props;
		if (filter) {
			books = books.filter(
				(book) => book.title.toLowerCase().indexOf(filter.toLowerCase()) != -1
			)
		}
		return (
			<LibraryView
				books={books}
				removeBook={this.props.removeBook}
				setBookToChange={this.props.setBookToChange}/>
		)
	}
}

const mapStateToProps = (state) => ({
	books: state.lib,
	filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
	removeBook(index){
		dispatch(removeBook(index))
	},

	setBookToChange(index,title,pages,in_stock){
		dispatch(setBookToChange(index,title,pages,in_stock))
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
