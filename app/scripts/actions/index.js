
export default const addBook = (name) => {
	return {
		type: "ADD_BOOK",
		name
	}
}

export default const removeBook = (id) => {
	return {
		type: "REMOVE_BOOK",
		id
	}
}

export default const setFilter = (value) => {
	return {
		type: "SET_FILTER",
		value
	}
}

export default const removeFilter = () => {
	return {
		type: "REMOVE_FILTER"
	}
}