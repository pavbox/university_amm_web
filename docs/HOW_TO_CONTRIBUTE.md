### MAKE A GUIDE ABOUT CONTRIBUTING PROJECT

- [x] how to clone and start
- [x] list of dependencies
- [ ] how to lint w/ atom and webpack
- [ ] simple intro in software stack, and why using this

## PRE-REQUIREMENTS

You need setup environment with:

```

Frontend:

1. node + npm
2. atom (or another text editor)
3. es-lint plugins for editor

Backend:

1. Python v.3.5.x (and newer)
2. Pip package manager
3. [future] Docker, k8s containers

Recommendation:

Use virtual environments for install python dependencies locally.
This way will not affect your global environment.
You can experiment with new features safer.

```

## HOW TO CONTRIBUTE PROJECT

Basically you need to fork project and clone repository on your local machine via `git clone <url>` command.

Next, go to the app/frontend folder and install dependencies via `npm i` command.

### DEPENDENCIES

| package name | version | lock |
|:-------------|---------:|:------:|
| @babel/core  |7.3.4|no|
| @babel/preset-env  |7.3.4|no|
| @babel/preset-react  |7.0.0|no|
| babel-loader  |8.0.4|no|
| css-loader  |1.0.1|no|
| eslint  |5.3.0|no|
| eslint-config-airbnb  |^7.1.0|no|
| eslint-loader  |2.1.2|no|
| eslint-plugin-import  |^.16.0|no|
| eslint-plugin-jsx-a11y  |6.2.1|no|
| eslint-plugin-react  |^.12.4|no|
| file-loader  |2.0.0|no|
| html-webpack-plugin  |3.2.0|no|
| mini-css-extract-plugin  |0.5.0|no|
| source-map-loader  |0.2.4|no|
| style-loader  |^.23.1|no|
| stylus  |^.54.5|no|
| stylus-loader  |3.0.2|no|
| url-loader  |1.1.2|no|
| webpack  |^.29.5|no|
| webpack-cli  |3.2.3|no|
| webpack-dev-server  |3.2.1|no|
|:-------------|---------:|:------:|
| prop-types  |^5.7.2|no|
| react  |^6.8.3|no|
| react-dom  |^6.8.3|no|
| react-redux  |6.0.1|no|
| redux  |4.0.1|no|
|:-------------|---------:|:------:|


### EXTRA LINT RULES

We are using [airbnb react/javascript](https://github.com/airbnb/javascript/tree/master/react) code style.

### LINTER CONFIGURATION GUIDE

We will use [es-linter](https://eslint.org) as manual linter of the project.

Easy way for use:
1. Install [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
2. Install dependencies via `npx install-peerdeps --dev eslint-config-airbnb` command in the root directory.
3. Make `.eslintrc` file in the root directory and set next configuration:
```
{
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
    }
}
```
4. `.babelrc` has next plugins `"presets": ["@babel/preset-env", "@babel/preset-react"]`.
5. For atom you need to install next plugins: `apm install linter-eslint` (have a few dependencies).


```
Some rules:
1. linters and presets have separate files in the root (frontend) directory.
2. avoid mess configurations in package.json, webpack config and other.
3. [future] lock dependencies on stable versions of plugins.
```

### SOFTWARE STACK

Frontend part have React+ES6+Webpack applications.
