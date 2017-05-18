import React from 'react';
import {connect} from "react-redux";

import {removeBook} from "../actions";

class Library extends React.Component {

    render() {
        let {books, filter} = this.props;
        if (filter) {
            books = books.filter(
                (book) => book.title.toLowerCase().includes(filter.toLowerCase())
            )
        }
        return (
            <ul>

                {
                    books.length === 0
                        ? <li>Нет ни одной книги</li>
                        : ""
                }
                {

                    books.map(
                        (book, index) => <li key={index + 1}>
                            {book.title}, {book.pages}
                            стр., {
                                book.in_stock == true
                                    ? " в наличии"
                                    : " нет в наличии"
                            }
                            <span className="remove-ic" onClick={() => this.props.removeBook(index)}></span>

                        </li>
                    )
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {books: state.lib, filter: state.filter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBook: (index) => dispatch(removeBook(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
