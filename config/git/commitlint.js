// Файл создан на основе @commitlint/config-conventional

const cz = require("./commitizen.js");

module.exports = {
  rules: {
    // Максимальная длина заголовка 72 символа
    "header-max-length": [2, "always", cz.subjectLimit],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

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

    // Перечислим все возможные варианты коммитов
    "type-enum": [2, "always", ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]],
  },
};