# eslint-config-metalab

Lint JavaScript [MetaLab] style.

![build status](http://img.shields.io/travis/metalabdesign/eslint-config-metalab/master.svg?style=flat)
![license](http://img.shields.io/npm/l/eslint-config-metalab.svg?style=flat)
![version](http://img.shields.io/npm/v/eslint-config-metalab.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/eslint-config-metalab.svg?style=flat)

## Overview

Just a little package for the JavaScript style guidelines used at [MetaLab]. Largely inspired by the rules and guidelines from [AirBnB], but a little bit more opinionated.

## Usage

```sh
npm install --save-dev eslint eslint-config-metalab
```

Just add the following to your `.eslintrc`:

```json
{
  "extends": [
    "metalab",
    "metalab/react"
  ]
}
```

And run:

```sh
#!/bin/sh

# Use .gitignore as a base for .eslintignore
cp .gitignore .eslintignore

# Start linting
eslint .
```

You should add a `lint` command to your package so its easy to run. In your `package.json` you can add:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and users can then lint your project easily with:

```sh
#!/bin/sh
npm run lint
```

It's recommended you use some combination of the rule packages:

*Language Presets*
 * `legacy` - Old ES5/non-babel code.
 * `base` - If you're using ES6/modern code.

*Framework Presets*
 * `react` - If you're using code with the `react` framework.

If you need more fine-grained control you can import things in the [rules/](rules) directory.

## Migrating

So you've set everything up but you're getting hundreds of errors because your project followed some other conventions or you've just upgraded rules. Don't fret! You can:

 * Disable noisy rules or rules you don't like.
 * Get `eslint` to automatically fix simple errors.
 * Setup your CI to incrementally validate.

### Disable Noisy Rules

You can disable the noisiest rules by simply temporarily blacklisting them:

```json
{
  "extends": [
    "metalab",
    "metalab/react"
  ],
  "rules": {
    "noisy-rule": 0
  }
}
```

NOTE: The plugins this package uses are namespaced under `metalab/`. So for example, the rule `import/no-commonjs` becomes `metalab/import/no-commonjs`. This prevents users from having to install 10 different `eslint` plugins as dependencies and avoids all the `peerDependency` warnings that can happen when versions get bumped. This means if you want to disable a rule you need to disable the `metalab/` prefixed version.

### Automatic Fixing

You can get `eslint` to fix whole classes of errors with its builtin `--fix` command. Note that this won't fix everything and sometimes doesn't do exactly what you want, but it's still a handy tool to have at your disposal.

If you have `eslint` running via `npm` you can just amend your lint command:

```sh
#!/bin/sh
npm run lint -- --fix
```

Or you can run it manually:

```sh
#!/bin/sh
eslint --fix .
```

### Gradual Migration

You can also setup lint checks to _only_ lint files that have been modified on a particular branch, allowing you to bring changes up to spec gradually. First create a new `.eslintrc.next` file containing the new rules you wish to use and then run:

```sh
# Fetch the names of all the files that have been changed,
# Filter the list to only have JS files,
# Lint each of those files with the new config.
git --no-pager diff --name-only FETCH_HEAD $(git merge-base FETCH_HEAD master) \
  | egrep '\.js$' \
  | xargs ./node_modules/.bin/eslint -c .eslintrc.next
```

Clean up the low hanging fruit and progressively iterate to bring beauty and inner peace to your project. :gem:

[MetaLab]: http://www.metalab.co
[AirBnB]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
