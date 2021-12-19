// Файл создан на основе @commitlint/config-conventional

const cz = require("./commitizen.js");

module.exports = {
  rules: {
    // Заголовок всегда только в нижнем регистре
    "header-case": [2, "always", "lower-case"],

    // Максимальная длина заголовка
    "header-max-length": [2, "always", cz.subjectLimit],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

    // Тело начинается с пустой строки
    "body-leading-blank": [2, "always"],

    // Тело не может быть пустым
    "body-empty": [2, "never"],

    // Максимальная длина тела
    "body-max-length": [2, "always", cz.subjectLimit],

    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],

    // Тип не может быть пустым
    "type-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    "type-enum": [2, "always", cz.types.map((type) => type.value)],

    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    // Область не может быть пустой
    "scope-empty": [2, "never"],

    // Перечислим все возможные области коммитов
    "scope-enum": [0],

    // Предмет (короткое описание) не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],

    // Предмет (короткое описание) не может быть пустым
    "subject-empty": [2, "never"],

    // Нижний колонтитул начинается с пустой строки
    "footer-leading-blank": [2, "always"],

    // Нижний колонтитул не может быть пустым
    "footer-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    "type-enum": [2, "always", ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]],
  },
};
