# eslint-plugin-c-lint

测试插件

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-c-lint`:

```sh
npm install eslint-plugin-c-lint --save-dev
```

## Usage

Add `c-lint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "c-lint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "c-lint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


