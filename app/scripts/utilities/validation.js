export const labeledInputValidation = (val, type, onSuccess, onError) => {
    let msg;

    // if (val === "") {
    //     msg = "input value should not be empty";
    //     onError(msg);
    //     throw new Error(msg);
    // }
    if (val === "") {
        msg = "Поле не должно быть пустым";
        onError(msg);
        if (onSuccess) {
            onSuccess();

        }
        return;
    }

    if (type.includes("name")) {
        if (!/([а-яА-Я]+(\ )+){2}([а-яА-Я]+){1}/.test(val)) {
            msg = "ФИО должно состоять из 3 слов";
            onError(msg);
            throw new Error(msg);
        }
    }

    if (type === "date") {
        if (!/\d{2}-\d{2}-\d{4}/.test(val)) {
            msg = "Формат даты должен быть DD-MM-YYYY";
            onError(msg);
            throw new Error(msg);
        }

        let date = val.split("-");

        if (+date[0] > 31 || +date[0] < 1) {
            msg = "День должен быть между 1 и 31 числом";
            onError(msg);
            throw new Error(msg);
        }

        if (+date[1] > 12 || +date[1] < 1) {
            msg = "Месяц должен быть между 1 и 12";
            onError(msg);
            throw new Error(msg);

        }

        if (+date[2] < 0) {
            msg = "Год не может быть отрицательным";
            onError(msg);
            throw new Error(msg);
        }

        let jsDate = new Date(date[2], --date[1], date[0]);

        if (jsDate.getDate() != date[0] || jsDate.getMonth() != date[1] || jsDate.getFullYear() != date[2]) {
            msg = "Такой даты не существует";
            onError(msg);
            throw new Error(msg);
        }
    }

    if (type === "email") {
        console.log(val);
        if (!/[a-z0-9]+@([a-z]+\.)+[a-z]+/i.test(val)) {
            msg = "Эл.почта должна быть в виде name@hostname";
            onError(msg);
            throw new Error(msg);
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

    try {

        labeledInputValidation("25email25@domain.ru", "email",
            null,
            function() { console.log("input email test failed") });

    } catch (e) {
        console.error(e);
    }

    try {

        labeledInputValidation("email25@domain.ru", "email",
            null,
            function() { console.log("input email test failed") });

    } catch (e) {
        console.error(e);
    }

    try {

        labeledInputValidation("email25@domain.subdomain.ru", "email",
            null,
            function() { console.log("input email test failed") });

    } catch (e) {
        console.error(e);
    }

}

if (NODE_ENV === "development") {
    // раскомментировать для теста инпута
    // labeledInputValidationTest();
}
