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
