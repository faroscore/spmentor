const initialState = "";

export default reducer = (state = initialState, action) => {
	switch(action.type){
		case 'SET_FILTER':
			return action.filter;
		case 'REMOVE_FILTER':
			return "";
		default:
			return state;
	}

}