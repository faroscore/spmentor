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
				{books.map((book,index) => <li key={index+1}>{book.title}</li>)}
			</ul>
		)
	}

}
