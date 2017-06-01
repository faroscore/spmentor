import React from 'react';
import {connect} from "react-redux";
import {addBook, changeBook, clearBookToChange} from "actions";
import AddBookView from "components/AddBookView"

class AddBook extends React.Component {

	render() {
		return (
			<AddBookView 
				addBook={this.props.addBook}
				changeBook={this.props.changeBook}
				changingBook={this.props.changingBook}
				/>

		)
	}
}

const mapStateToProps = (state) => ({
	changingBook: state.changing_book
})

const mapDispatchToProps = (dispatch) => ({
	addBook(title, pages, in_stock){
		dispatch(addBook(title, pages, in_stock));
	},

	changeBook(index, title, pages, in_stock){
		dispatch(changeBook(index, title, pages, in_stock));
		dispatch(clearBookToChange());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
