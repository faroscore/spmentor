import assert from "assert";
import { setField } from "../actions";

const initialState = {
    director_role: localStorage.getItem("director_role") || "Генеральному директору",
    company: localStorage.getItem("company") || "OAO Фирма",
    director_name: localStorage.getItem("director_name") || "Иванову Ивану Ивановичу",
    from: localStorage.getItem("from") || "Петрова Петра Петровича",
    section: localStorage.getItem("section") || "отдел заказов",
    role: localStorage.getItem("role") || "технический специалист",
    date: localStorage.getItem("date") || "21.12.2012",
    initials: localStorage.getItem("initials") || "Петров П.П."
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FIELD":
            let name = action.name;
            let value = action.value;

            localStorage.setItem(name, value);
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
