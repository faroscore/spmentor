// library actions
export const addBook = (title, pages, in_stock) => {
    return {
        type: "ADD_BOOK",
        title,
        pages,
        in_stock
    }
}

export const removeBook = (index) => {
    return {
        type: "REMOVE_BOOK",
        index
    }
}

export const changeBook = (index, title, pages, in_stock) => {
    return {
        type: "CHANGE_BOOK",
        index,
        title,
        pages,
        in_stock
    }
}

// filter actions
export const setFilter = (value) => {
    return {
        type: "SET_FILTER",
        value
    }
}

export const removeFilter = () => {
    return {
        type: "REMOVE_FILTER"
    }
}


//book change actions
export const setBookToChange = (index, title, pages, in_stock) => {
    return {
        type: "SET_BOOK_TO_CHANGE",
        index,
        title,
        pages,
        in_stock
    }
}

export const clearBookToChange = (index, title, pages, in_stock) => {
    return {
        type: "CLEAR_BOOK_TO_CHANGE"
    }
}