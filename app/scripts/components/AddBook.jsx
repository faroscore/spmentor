import React from 'react';

export default class AddBook extends React.Component{

	constructor(props) {
		super(props);
		this.addBook = this.addBook.bind(this);
	}

	addBook(){
		var val = this.textInput.value;
		if (val){
			this.props.libraryStore.dispatch({type: 'ADD_BOOK', title: val})
			this.textInput.value = "";
		}

		var state = JSON.stringify(this.props.libraryStore.getState().libraryReducer)
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

AddBook.propTypes = {
	libraryStore: React.PropTypes.object.isRequired
}
