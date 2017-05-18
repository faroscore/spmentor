import assert from "assert";
const initialState = JSON.parse(localStorage.getItem("lib")) || [];

const reducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case 'ADD_BOOK':
            newState = [
                ...state, {
                    title: action.title,
                    pages: action.pages,
                    in_stock: action.in_stock
                }
            ];
            break;

        case 'REMOVE_BOOK':
            newState = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;

        case 'CHANGE_BOOK':
            let index = action.index;
            if (index > state.length - 1) {
                alert('Нет такого элемента');
                return state;
            }

            let item = state[index];

            newState = [
                ...state.slice(0, action.index), {
                    title: action.title || item["title"],
                    pages: action.pages || item["pages"],
                    in_stock: action.in_stock
                },
                ...state.slice(action.index + 1)
            ]

            break;

        default:
            newState = state;
            break;


    }

    return newState;
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
    assert.deepEqual(removeState, reducer(initialState, { type: "REMOVE_BOOK", index: 1 }))

    console.log("Library reducer passed tests");
}

// if (NODE_ENV === "development") {
//     reducerTest();
// }

export default reducer;
