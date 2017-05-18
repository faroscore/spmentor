import React from 'react';
import {connect} from "react-redux";
import {addBook, changeBook} from "../actions";

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.addBook    = this
            .addBook
            .bind(this);

        this.changeBook = this
            .changeBook
            .bind(this);

        this.focusInput = this
            .focusInput
            .bind(this);
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

        this
            .props
            .addBook(title, pages, in_stock);

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

    render() {
        return (
            <div>
                <input
                    ref={(node) => this.titleInput = node}
                    placeholder="Введите название книги"
                    type="text"
                    onFocus={this.focusInput}/>

                <input
                    ref={(node) => this.pagesInput = node}
                    placeholder="Введите количество страниц"
                    type="number"
                    min="0"
                    onFocus={this.focusInput}/>

                <p>
                    В наличии ли книга?
                </p>

                <select ref={(node) => this.inStockInput = node}>
                    <option value="1">Да</option>
                    <option value="0">Нет</option>
                </select>

                <input
                    ref={(node) => this.indexInput = node}
                    placeholder="Введите индекс для изменения"
                    type="number"
                    min="0"
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


const mapDispatchToProps = (dispatch) => {
    return {
        addBook   : (title, pages, in_stock) => dispatch(addBook(title, pages, in_stock)),
        changeBook: (index, title, pages, in_stock) => dispatch(
            changeBook(index, title, pages, in_stock)
        )
    }
}

export default connect(null, mapDispatchToProps)(AddBook);
