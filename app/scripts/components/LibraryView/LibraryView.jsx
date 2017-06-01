import React from "react";

class LibraryView extends React.Component { 
  render(){
    let {books} = this.props;
    return(
        <ul>
          { 
            books.length === 0 ? <li>Нет ни одной книги</li> : ""
          }

          {
            books.map((book, index) =>
              <li key={index + 1}>
                {book.title}, {book.pages} стр., { book.in_stock == true ? " в наличии" : " нет в наличии" }
                <span className="remove-ic" onClick={() => this.props.removeBook(index)}></span>
                <span className="change-ic" onClick={() => this.props.setBookToChange(index, book.title, book.pages, book.in_stock)}></span>
              </li>
            ) 
          }
        </ul>
      )
  }
}

export default LibraryView;
