# Branching Strategy

## Trunk Based Development (TBD)

<p align="center">
    <img src="../assets/images/branching_strategy.svg" alt="strategy" height="auto" width="500px">
</p>

Source code branching strategy in which developers work in short-lived branches or directly in the trunk, which is the mainline.
This practice contrasts with other strategies that involve long-lived feature branches. Trunk Based Development aims to avoid the
pitfalls associated with long-lived branches, mainly problematic merge conflicts and integration issues.

- **Short-Lived Feature Branches:**
  - Developers create branches for features, but these branches are short-lived, meaning they're meant to be
    merged back into the trunk within days, not weeks or months.
  - This strategy minimizes merge conflicts since the codebase doesn't deviate much in short intervals.

- **Feature Toggles:**
  - Instead of withholding code from the trunk until a feature is complete, developers can merge partial or in-progress
    features behind "feature toggles" (or feature flags).
  - This allows the code to be integrated continuously while keeping the incomplete feature hidden from end-users.
    When the feature is complete and tested, the toggle can be switched on.

- **Continuous Integration (CI):**
Trunk Based Development pairs well with Continuous Integration. Since developers are frequently merging their changes
back into the trunk, it's crucial to have automated tests in place to catch regressions or issues quickly.

- **Release Branches:**
  - When it's time for a release, a branch can be made from the trunk. This branch can receive bug fixes if necessary,
    but new features are always developed in the trunk.
  - Once the release is deemed stable, it can be deployed to production. Meanwhile, development continues on the trunk without waiting.

**Advantages**

- **Rapid Feedback:** Due to the frequent integrations, issues in the code or design are identified earlier in the development cycle.
- **Avoiding Merge Hell:** Long-lived branches often result in significant merge conflicts. Merging frequently with the trunk
prevents this scenario.
- **Simplified Branching Strategy:** Without a myriad of long-lived feature branches, the repository remains cleaner and easier to manage.

**Challenges**

- **Requires Discipline:** To prevent destabilizing the trunk, developers need a strong discipline, comprehensive test coverage, and CI practices.
- **Feature Toggles Management:** Over-reliance on feature toggles can lead to a cluttered codebase if old toggles aren't removed in time.
