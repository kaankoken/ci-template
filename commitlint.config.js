module.exports = {
  extends: ["@commitlint/config-angular"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "body-max-line-length": [2, "always", 120],
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert", "ci", "perf", "build", "hotfix"]],
    "subject-exclamation-mark": [0, "never", "!"],
  },
};
