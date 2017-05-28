import React from 'react';
import {connect} from "react-redux";
import {addBook, changeBook} from "actions";
import AddBookView from "components/AddBookView"

class AddBook extends React.Component {

	render() {
		return (
			<AddBookView 
				addBook={this.props.addBook}
				changeBook={this.props.changeBook}
				/>

		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	addBook(title, pages, in_stock){
			dispatch(addBook(title, pages, in_stock))
	},

	changeBook(index, title, pages, in_stock){
		dispatch(changeBook(index, title, pages, in_stock))
	}
})

export default connect(null, mapDispatchToProps)(AddBook);
