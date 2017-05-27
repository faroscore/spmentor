import React from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {removeBook} from "../actions";

const queryString = require('query-string');

class Library extends React.Component {

    render() {
        let {books} = this.props;
        let filter = queryString.parse(location.search).str;

        if (filter) {
            books = books.filter(
                (book) => book.title.toLowerCase().includes(filter.toLowerCase())
            )
        }

        return (
            
            <ol>
                {
                    books.length === 0 ?
                        <li>Нет ни одной книги</li> : ""
                }
                {

                    books.map(
                        (book, index) => <li key={index + 1}>
                            <Link
                                to={{
                                    pathname: "/items/" + (
                                        index + 1
                                    )
                                }}>
                                {book.title}
                            </Link>
                            , {book.pages}
                            стр., {
                                book.in_stock == true
                                    ? " в наличии"
                                    : " нет в наличии"
                            }
                            <span className="remove-ic" onClick={() => this.props.removeBook(index)}></span>

                        </li>

                    )
                }
            </ol>

        )
    }
}

const mapStateToProps = (state) => ({books: state.lib})

const mapDispatchToProps = (dispatch) => ({
    removeBook(index) {
        dispatch(removeBook(index))
    }
})

const filteredLibrary = connect(mapStateToProps, mapDispatchToProps)(Library);

export default withRouter(filteredLibrary)
