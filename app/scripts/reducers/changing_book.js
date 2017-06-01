const initialState = "";

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'SET_BOOK_TO_CHANGE':
			return {
				index: action.index,
        title: action.title,
        pages: action.pages,
        in_stock: action.in_stock
			};
		case 'CLEAR_BOOK_TO_CHANGE':
			return "";
		default:
			return state;
	}

}

export default reducer;