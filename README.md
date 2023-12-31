# CI Template

[![CI](https://github.com/kaankoken/ci-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/kaankoken/ci-template/actions/workflows/ci.yaml)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

This a template for the CI/CD pipeline mostly focused on mobile app development. However, most of the CI parts could be used in any project.
This template heavily depends on [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) & [semver](https://semver.org).

The actions either require PAT or GitHub App to handle automated PRs & (pre)releases and the CI follows a [strategy](docs/branching_strategy.md) similar to `Trunk Based` development.

- To create/stage a pre-release version, you need to add a label called `beta` to open a pull request.
- To create a release version, you need to add a label called `release` to close the pull request.

> **Note**
>
> This CI-CD pipeline do requires a Personal Access Token(PAT) to operate.
> For more information visit [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

> **Note**
>
> If you have encountered the following error: `GitHub Actions is not permitted to create or approve pull requests`
> Please enable `Allow GitHub Actions to create and approve pull requests` from
> `https://github.com/organizations/your-organization/settings/actions` or
> `https://github.com/user-name/repo-name/settings/actions`

> **Note**
>
> If you are getting `Resource not accessible by integration`
> Please give `Read & Write` permission to `Workflow permissions` from
> `https://github.com/organizations/your-organization/settings/actions` or
> `https://github.com/user-name/repo-name/settings/actions`

- Add [cocogitto](https://github.com/cocogitto/cocogitto-bot) to report conventional-commits mistake as commend to opened pull-request.

## CI
The CI part contains:

- Spell check with [typos](https://github.com/crate-ci/typos)
- Spell check with [CSpell](http://cspell.org)
- Conventional-commits checks with [commitlint](https://github.com/conventional-changelog/commitlint) (uses angular template)
- [Pre-commit](https://pre-commit.com) to control/verify below

To check additional hooks, visit [here](https://pre-commit.com/hooks.html)

- yaml file control
- end-of-file check
- trailing whitespace control
- private key check
- merge conflict control
- check-toml

Optional Integrations:
- [ktlint](https://github.com/pinterest/ktlint) (kotlin linter check)
- [swiftlint](https://github.com/realm/SwiftLint) (swift linter check)
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) (swift formatter)

### Ktlint integration

It requires local integration for Android projects

For legacy projects:

<details>
<summary>Groovy DSL</summary>

```groovy
/* build.gradle (android/my-application)*/
buildscript {
    ext {
        ...
        ktlint_version: '11.5.1'
    }

    dependencies {
        ...
        classpath "org.jlleitschuh.gradle:ktlint-gradle:$ktlint_version"
    }
}

/* build.gradle (:app)*/

apply plugin: "org.jlleitschuh.gradle.ktlint"
```
</details>

For newer versions:

<details>
<summary>Kotlin DSL</summary>

```kotlin
* build.gradle (android/my-application)*/
// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    ...
    id("org.jlleitschuh.gradle.ktlint") version "11.5.1" apply false
}

/*build.gradle.kts (:app)*/

plugins {
    ...
    id("org.jlleitschuh.gradle.ktlint")
}

```
</details>

> **Note**
>
> For newer projects, you may need to set `JAVA_HOME` to JAVA_17

<!--
### SwiftFormat

 TODO: will populate later

### SwiftLint

 TODO: will populate later
-->

## Auto Update

If the `beta` label is attached to PR that merged to the master branch, the `auto-update` workflow will detect it, and it will start to process the `pre-release` workflow.
Similarly, if the `release` label is attached to PR that merged into the master branch, the `auto-update` workflow will detect it, and it will start to process the `release` workflow.

## Clean Cache

The workflow that is responsible for cleaning caches.

## (Pre)Release

Both of the workflows work similarly:

- They will analyze the commits.
- They will create a new `release/tag` if the commits are suitable.
- They will update the release notes.
- They will create a PR for the changed files.

The rest of the customization depends on the project.

## Github Pages for a badge/test results

> **Note**
>
> You have to enable `pages` for your GitHub account or the organization.
> Please visit [here](https://pages.github.com) to start.

- Create `pages` for this repository

```bash
# checkout gh-pages branch from master
git checkout --orphan gh-pages

# Remove all files in this branch except `.git`
find /path/to/your/folder/ -not -path '/path/to/your/folder/.git/*' -delete

# Add index.html
touch index.html

echo "<!DOCTYPE html>" > index.html
echo "<html>" >> index.html
echo "  <head>" >> index.html
echo "    <title>My HTML Page</title>" >> index.html
echo "  </head>" >> index.html
echo "  <body>" >> index.html
echo "    <h1>Hello, World!</h1>" >> index.html
echo "  </body>" >> index.html
echo "</html>" >> index.html

# Commit the changes & push
git add .
git commit -m "initial commit"
git push
```

- Create `svg` badge with various tools & upload it to `gh-pages` branch
- Add badge to your `Readme`

```md
[![Coverage](https://raw.githubusercontent.com/kaankoken/ci-template/gh-pages/badge.svg)](https://kaankoken.github.io/ci-template/)
```

## Github App

> **Note**
>
> Before you start, you need to create a `Github App` for your organization or Github account.
> Please visit [here](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)

After you register your app, you need to assign some permissions for your needs.

Developer Settings > Github Apps > Edit > Permissions & events

- Repository permissions:
    - Contents (read-write)
    - Discussions (read-write)
    - Issues (read-write)
    - Metadata (read-only)
    - Pull-Request (read-write)
    - Workflows (read-write)

### Install to your repositories

Developer Settings > Github Apps > Edit > Install App > <Org-or-GH-User> > Only Select repositories > <Your-Repo>

### Get App Info

You need to get the `Github App` two fields of information to set the repository's secret previously selected.

- App-Id
- private-key

Add those to the repository secret as

- APP_ID = App_id
- APP = private-key
