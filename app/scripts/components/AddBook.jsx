import React from 'react';

export default class AddBook extends React.Component{

	constructor(props) {
		super(props);
		this.addBook = this.addBook.bind(this);
		this.changeBook = this.changeBook.bind(this);
	}

	addBook(){
		let title = this.titleInput.value;
		let pages = this.pagesInput.value;
		let in_stock = this.inStockInput.value;

		if (title === ""){
			this.titleInput.classList.add("input_wrong");

			if (pages === "")
				this.pagesInput.classList.add("input_wrong");

			return;
		}

		this.props.addBook(title,pages,in_stock);
	}

	changeBook(){
		let index = this.indexInput.value;
		let title = this.titleInput.value;
		let pages = this.pagesInput.value;
		let in_stock = this.inStockInput.value;

		if (index === "") {
			this.indexInput.classList.add("input_wrong");
			return;
		}

		this.props.changeBook(index,title,pages,in_stock);

	}

	render(){
		return (
			<div>
				<input
					ref={(node) => this.titleInput = node}
					placeholder="Введите название книги"
					type="text"
					onFocus={(e) => {e.target.classList.remove("input_wrong")}}
				/>

				<input
					ref={(node) => this.pagesInput = node}
					placeholder="Введите количество страниц"
					type="number"
					min="0"
					onFocus={(e) => {e.target.classList.remove("input_wrong")}}
				/>

				<p>
					В наличии ли книга?
				</p>

				<select 
					ref={(node) => this.inStockInput = node}
					>
					<option value="1">Да</option>
					<option value="0">Нет</option>
				</select>

				<input
					ref={(node) => this.indexInput = node}
					placeholder="Введите индекс для изменения"
					type="number"
					min="0"
					onFocus={(e) => {e.target.classList.remove("input_wrong")}}
				/>

				<input
					type="submit"
					onClick={this.addBook}
					value="Добавить книгу"
					className="btn"
				/>
				<input
					type="submit"
					onClick={this.changeBook}
					value="Изменить книгу"
					className="btn"
				/>
			</div>
		)
	}
}
