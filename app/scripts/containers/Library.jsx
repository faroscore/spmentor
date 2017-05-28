import React from 'react';
import {connect} from "react-redux";

import {removeBook} from "actions";
import LibraryView from "components/LibraryView";

class Library extends React.Component {

	render() {
		let {books, filter} = this.props;
		if (filter) {
			books = books.filter(
				(book) => book.title.toLowerCase().includes(filter.toLowerCase())
			)
		}
		return (
			<LibraryView
				books={books}
				removeBook={this.props.removeBook}/>
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
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
