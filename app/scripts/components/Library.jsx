import React from 'react';

export default class Library extends React.Component{
	render(){
		let books = this.props.books;
		let filter = this.props.filter;
		if (filter){
			books = books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
		}
		return (
			<ul>
				{
					books.length === 0 ? <li>Нет ни одной книги</li> : ""
				}
				{

					books.map(
						(book,index) => 
						<li key={index+1}> 
							{book.title},
							{book.pages} стр., 
							{ book.in_stock == true ? " в наличии" : " нет в наличии" }
							<span 
								className="remove-ic"
								onClick={() => this.props.removeBook(index)}
							> 
							</span>

						</li>
					)
				}
			</ul>
		)
	}

}
