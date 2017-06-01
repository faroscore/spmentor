import React from "react";

class AddBookView extends React.Component {
	constructor(props) {
		super(props);
		this.addBook  = this.addBook.bind(this);
		this.changeBook = this.changeBook.bind(this);
		this.focusInput = this.focusInput.bind(this);
		this.handleChanges = this.handleChanges.bind(this);
		this.state = {
			index: undefined,
			title: undefined,
			pages: undefined,
			in_stock: 1
		}
	}

	componentWillReceiveProps(nextProps){
		let {title, pages, in_stock, index} = nextProps.changingBook;
		this.setState({
			title,
			pages,
			in_stock,
			index
		})
	}

	addBook() {
		let title = this.titleInput.value;
		let pages = this.pagesInput.value;
		let in_stock = this.inStockInput.value;

		if (title === "") {
			this.errorInput(this.titleInput)

			if (pages === "") 
				this.errorInput(this.pagesInput);
			
			return;
		}
		this.props.addBook(title, pages, in_stock);
	}

	changeBook() {
		let index = this.indexInput.value;
		let title = this.titleInput.value;
		let pages = this.pagesInput.value;
		let in_stock = this.inStockInput.value;

		if (index === "") {
			this.errorInput(this.indexInput)
			return;
		}

		this
			.props
			.changeBook(index, title, pages, in_stock);
	}

	focusInput(e) {
		e
			.target
			.classList
			.remove("input_wrong");
	}

	errorInput(input) {
		input
			.classList
			.add("input_wrong");
	}

	handleChanges(){
		this.setState({
			index: this.indexInput.value,
			title: this.titleInput.value,
			pages: this.pagesInput.value,
			in_stock: this.inStockInput.value
		})
	}

	render() {
		let {title, pages, in_stock, index} = this.state;
		return (
			<div>
				<input
					ref={(node) => this.titleInput = node}
					placeholder="Введите название книги"
					type="text"
					value={title}
					onChange={this.handleChanges}
					onFocus={this.focusInput}/>

				<input
					ref={(node) => this.pagesInput = node}
					placeholder="Введите количество страниц"
					type="number"
					min="0"
					value={pages}
					onChange={this.handleChanges}
					onFocus={this.focusInput}/>

				<p>
					В наличии ли книга?
				</p>

				<select 
					value={in_stock}
					ref={(node) => this.inStockInput = node}
					onChange={this.handleChanges} >

					<option value="1">Да</option>
					<option value="0">Нет</option>
				</select>

				<input
					ref={(node) => this.indexInput = node}
					placeholder="Введите индекс для изменения"
					type="number"
					min="0"
					value={index}
					onChange={this.handleChanges} 
					onFocus={this.focusInput}/>

				<input
					type="submit"
					onClick={this.addBook}
					value="Добавить книгу"
					className="btn"/>
				<input
					type="submit"
					onClick={this.changeBook}
					value="Изменить книгу"
					className="btn"/>
			</div>
		)
	}
}

export default AddBookView;