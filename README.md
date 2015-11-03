# eslint-config-metalab

Lint JavaScript MetaLab style.

## Usage

```sh
npm install --save-dev eslint eslint-config-metalab
```

Just add the following to your `.eslintrc`:

```json
{
  "extends": [
    "metalab/standard",
    "metalab/react"
  ]
}
```

It's recommended you use some combination of the rule packages:

 * `classic` - Old ES5/non-babel code.
 * `node` - If you're targeting the `node` platform.
 * `react` - If you're using the `react` framework.
 * `standard` - If you're using ES6/modern code.

If you need more fine-grained control you can import things in the [rules/](rules) directory.
