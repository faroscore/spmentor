import assert from "assert";
import { setField } from "actions";
import {getStorageItem} from "utilities/storageHelper.js";

const initialState = {
    director_role: getStorageItem("director_role") || "Генеральному директору",
    company: getStorageItem("company") || "OAO Фирма",
    director_name: getStorageItem("director_name") || "Иванову Ивану Ивановичу",
    from: getStorageItem("from") || "Петров Петр Петрович",
    section: getStorageItem("section") || "отдел заказов",
    role: getStorageItem("role") || "технический специалист",
    date: getStorageItem("date") || "21-12-2012",
    email: getStorageItem("email") || "recruit@mail.ru"
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FIELD":
            let name = action.name;
            let value = action.value;
            let newState = Object.assign({}, state);
            newState[name] = value;

            return newState;
        default:
            return state;

    }
}

const test = () => {
    let initialState = {
        field: "value"
    };

    let newState = {
        field: "new value"
    };
    assert.deepEqual(
        Object.freeze(
            reducer(initialState, setField("field", "new value"))), newState);
}


if (NODE_ENV === "development") {
    test();
    console.log("field.js passed tests");
}
