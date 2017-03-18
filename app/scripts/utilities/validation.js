export const labeledInputValidation = (val, type, onSuccess, onError) => {
    if (val === "") {
        onError();
        throw new Error("input value should not be empty");
    }

    if (type.includes("name")) {
        if (!/([а-яА-Я]+(\ )+){2}([а-яА-Я]+){1}/.test(val)) {
            onError();
            throw new Error("fio should be constructed from 3 words");
        }
    }

    if (type === "date") {
        if (!/\d{2}.\d{2}.\d{4}/.test(val)) {
            onError();
            throw new Error("Date format should be in format DD.MM.YYYY");
        }

        let date = val.split(".");

        if (+date[0] > 31 || +date[0] < 1) {
            onError();
            throw new Error("Date day should be between 1 and 31");
        }

        if (+date[1] > 12 || +date[1] < 1) {
            onError();
            throw new Error("Date month should be between 1 and 12");
        }

        if (+date[2] < 0) {
            onError();
            throw new Error("Date year should be above or equal zero");
        }
    }

    if (type === "initials") {
        if (!/([а-яА-Я]* [А-Я]\.[А-Я]\.)/.test(val)) {
            onError();
            throw new Error("Initials should be in format Surname N.M.");
        }

    }

    if (NODE_ENV === "development") {
        console.log("input with type", type, " with value ", val, " passed validation");
    }

    if (onSuccess) {
        onSuccess();
    }

}

const labeledInputValidationTest = () => {

    // Имя
    try {
        labeledInputValidation("два слова", "name",
            null,
            function() { console.log("input name test failed") });

    } catch (e) {
        console.error(e);
    }

    try {
        labeledInputValidation("Иванов Иван Иванович", "name",
            null,
            function() { console.log("input name test failed") });
    } catch (e) {
        console.error(e);
    }

    // даты

    try {
        labeledInputValidation("32.12.2017", "date",
            null,
            function() { console.log("input date test failed") });

    } catch (e) {
        console.error(e);
    }

    try {
        labeledInputValidation("15.14.2017", "date",
            null,
            function() { console.log("input date test failed") });
    } catch (e) {
        console.error(e);
    }

    try {

        labeledInputValidation("15.05.17", "date",
            null,
            function() { console.log("input date test failed") });

    } catch (e) {
        console.error(e);
    }

    try {

        labeledInputValidation("15.05.2017", "date",
            null,
            function() { console.log("input date test failed") });

    } catch (e) {
        console.error(e);
    }

    // инициалы
    try {

        labeledInputValidation("", "initials",
            null,
            function() { console.log("input initials test failed") });

    } catch (e) {
        console.error(e);
    }

    try {
        labeledInputValidation("Не инициалы", "initials",
            null,
            function() { console.log("input initials test failed") });
    } catch (e) {
        console.error(e);
    }

    try {

        labeledInputValidation("Фамилия И.О.", "initials",
            null,
            function() { console.log("input initials test failed") });

    } catch (e) {
        console.error(e);
    }

}

if (NODE_ENV === "development") {
	// раскомментировать для теста инпута
    // labeledInputValidationTest();
}
