const initialState = "";

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'SET_FILTER':
			return action.value;
		case 'REMOVE_FILTER':
			return "";
		default:
			return state;
	}

}

export default reducer;