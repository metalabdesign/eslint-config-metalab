# eslint-config-metalab

Lint JavaScript [MetaLab] style.

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
    "metalab/browser",
    "metalab/react"
  ]
}
```

And run:

```sh
eslint --ignore-path .gitignore
```

It's recommended you use some combination of the rule packages:

 * `legacy` - Old ES5/non-babel code.
 * `browser` - If you're targeting the DOM environment.
 * `node` - If you're targeting the `node` platform.
 * `react` - If you're using the `react` framework.
 * `base` - If you're using ES6/modern code.

If you need more fine-grained control you can import things in the [rules/](rules) directory.

## Migrating

So you've set everything up but you're getting hundreds of errors because your project followed some other conventions. Don't fret! You can disable the noisiest rules by simply temporarily blacklisting them:

```json
{
  "extends": [
    "metalab/browser",
    "metalab/react"
  ],
  "rules": {
    "noisy-rule": 0
  }
}
```

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
