# Branching Naming Convention

## Introduction

This document outlines the branching naming convention used in our project. Clear and consistent branch names are essential for effective collaboration and version control. Following this convention will help us maintain a structured and organized codebase.

> CAUTION🔥: Only the following branching convention will be valid. The rest of the pattern will not be acceptable in the CI pipeline.

> NOTE: This convention only allows slash (`/`), and hyphen (`-`).

- **Feature Branches**

`feat/branch-name` | `feature/branch-name`: Used for new feature development.

#### Example:

```md
- feature/user-authentication (valid)
- feat/auth/user-validation (valid)
- feature/user_auth (not-valid)
```

- **Bug(fix) Branches**

`bugfix/branch-name` | `fix/branch-name`: Used for fixing bugs.

#### Example:

```md
- bugfix/login-page-crash
```

- **Hotfix Branches**

`hotfix/branch-name`: Similar to bug fix branches but used for urgent fixes that need to be applied quickly to the production environment.

- **Release Branches**

`release/version-number`: Used to prepare a new release version for deployment.

#### Example:

```md
- release/2.1.0 (valid)
- release/v2.1.0 (valid)
```

- **Main Branches**

`main` | `master`: The default branch where the codebase is stable and ready for deployment.

- **Development Branches**

`dev` | `development`: A branch used for ongoing development work and integrating features before shipping into the `alpha` or `beta` channels/branch.

- **Issue Branches**

`issue/issue-number` | `issue/task-name` | `issue/task-number`: Used for addressing specific issues or tasks.

#### Example

```md
issue/123 (valid)
issue/gma-123
```

- **Improvement Branches**

`improvement/branch-name`: These branches generally contain refactors & performance improvements.

- **Chore Branches**

`chore/branch-name`: While not a standard branch type, it will be used for catch-all for miscellaneous tasks that don't fit into the other categories.
These tasks could include code cleanup, refactoring, documentation updates, and other non-functional changes that are necessary for maintaining the codebase's health and quality.
