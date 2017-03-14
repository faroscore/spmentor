const values = {
	director_role: localStorage.getItem("director_role") || "Генеральному директору",
	company: localStorage.getItem("company") || "OAO Фирма",
	director_name: localStorage.getItem("director_name") || "Иванову Ивану Ивановичу",
	from: localStorage.getItem("from") || "Петрова Петра Петровича",
	section: localStorage.getItem("section") || "отдел заказов",
	role: localStorage.getItem("role") || "технический специалист",
	date: localStorage.getItem("date") || "21.12.2012",
	initials: localStorage.getItem("initials") || "Петров П.П."
};

export default (state = values, action) => {
	switch (action.type) {
		case "SET_FIELD":
			switch (action.name) {
				case "director_role":
					localStorage.setItem("director_role", action.value);
					return Object.assign(state, { director_role: action.value });
				case "company":
					localStorage.setItem("company", action.value);
					return Object.assign(state, { company: action.value });
				case "director_name":
					localStorage.setItem("director_name", action.value);
					return Object.assign(state, { director_name: action.value });
				case "from":
					localStorage.setItem("from", action.value);
					return Object.assign(state, { from: action.value });
				case "section":
					localStorage.setItem("section", action.value);
					return Object.assign(state, { section: action.value });
				case "role":
					localStorage.setItem("role", action.value);
					return Object.assign(state, { role: action.value });
				case "date":
					localStorage.setItem("date", action.value);
					return Object.assign(state, { date: action.value });
				case "initials":
					localStorage.setItem("initials", action.value);
					return Object.assign(state, { initials: action.value });
				default:
					return state;
			}
			break;
		default:
			return state;

	}
}
