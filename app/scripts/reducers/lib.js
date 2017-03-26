import assert from "assert";

const initialState = JSON.parse(localStorage.getItem("libraryReducer")) || [];

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state, {
                    title: action.title,
                    pages: action.pages,
                    in_stock: action.in_stock
                }
            ]
        case 'REMOVE_BOOK':
            return [
                state.slice(0, action.index - 1),
                state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}


const reducerTest = () => {
    let initialState = [{
        title: "Книга 1",
        pages: "100",
        in_stock: true
    }, {
        title: "Книга 2",
        pages: "200",
        in_stock: true
    }, {
        title: "Книга 3",
        pages: "300",
        in_stock: true
    }];

    let addState = [{
        title: "Книга 1",
        pages: "100",
        in_stock: true
    }, {
        title: "Книга 2",
        pages: "200",
        in_stock: true
    }, {
        title: "Книга 3",
        pages: "300",
        in_stock: true
    }, {
        title: "Книга 4",
        pages: "400",
        in_stock: true
    }];

    let removeState = [{
        title: "Книга 1",
        pages: "100",
        in_stock: true
    }, {
        title: "Книга 3",
        pages: "300",
        in_stock: true
    }];

    assert.deepEqual(addState, reducer(initialState, { type: "ADD_BOOK", title: "Книга 4", pages: "400", in_stock: true }));
    assert.deepEqual(removeState, reducer(initialState, { type: "REMOVE_BOOK", index: 1}))

    console.log("Library reducer passed tests");
}

if (NODE_ENV === "development") {
    reducerTest();
}
