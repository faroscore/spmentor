import assert from "assert";

export const setField = (name,value) => {
	return {
		type: "SET_FIELD",
		name,
		value
	}
}

const testSetField = () =>{
	let result = {
		type: "SET_FIELD",
		name: "director_role",
		value: "Главный управляющий"
	};

	assert.deepEqual(setField("director_role","Главный управляющий"),result);
}

testSetField();

console.log("action tests passed");