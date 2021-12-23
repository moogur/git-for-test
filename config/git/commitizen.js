"use strict";

module.exports = {
  types: [
    { value: "feature", name: "feature:  A new feature" },
    { value: "bugfix", name: "bugfix:   A bug fix" },
    { value: "docs", name: "docs:     Documentation only changes" },
    {
      value: "style",
      name: "style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "perf",
      name: "perf:     A code change that improves performance",
    },
    { value: "test", name: "test:     Adding missing tests" },
    {
      value: "build",
      name: "build:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation",
    },
    { value: "config", name: "config:   Changing the configuration, configuring linters and etc" },
    { value: "ci", name: "ci:       Continuous integration/continuous delivery\n            or continuous deployment" },
  ],

  scopes: [],
  messages: {},

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // limit subject length
  subjectLimit: 200,

  // Вопросы которые не надо задавать
  skipQuestions: ["body", "footer", "breaking"],
};
