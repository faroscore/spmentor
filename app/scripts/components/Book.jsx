import React from "react";

export default class Book extends React.Component {
    render() {
        let {title, pages, in_stock	} = this.props.book;
        return (
        	<div>
        		<h2>{title}</h2>
	        	<p>Количество страниц в книге: {pages} стр.</p>
	        	{
	        		in_stock ? <p>Есть в наличии</p> : <p>Нет в наличии</p>
	        	}
        	</div>
	        	
		)
    }
}