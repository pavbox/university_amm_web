### MAKE A GUIDE ABOUT CONTRIBUTING PROJECT

- [x] how to clone and start
- [ ] list of dependencies
- [ ] how to lint w/ atom and webpack
- [ ] simple intro in software stack, and why using this


## HOW TO CONTRIBUTE PROJECT

Basically you need to fork project and clone repository on your local machine via `git clone <url>` command.

Next, go to the app/frontend folder and install dependencies via `npm i` command.

### DEPENDENCIES

```

"devDependencies": {
  "@babel/core": "^7.3.4",
  "@babel/preset-env": "^7.3.4",
  "@babel/preset-react": "^7.0.0",
  "babel-loader": "^8.0.4",
  "css-loader": "^1.0.1",
  "eslint": "^5.3.0",
  "eslint-config-airbnb": "^17.1.0",
  "eslint-loader": "^2.1.2",
  "eslint-plugin-import": "^2.16.0",
  "eslint-plugin-jsx-a11y": "^6.2.1",
  "eslint-plugin-react": "^7.12.4",
  "file-loader": "^2.0.0",
  "html-webpack-plugin": "^3.2.0",
  "mini-css-extract-plugin": "^0.5.0",
  "source-map-loader": "^0.2.4",
  "style-loader": "^0.23.1",
  "stylus": "^0.54.5",
  "stylus-loader": "^3.0.2",
  "url-loader": "^1.1.2",
  "webpack": "^4.29.5",
  "webpack-cli": "^3.2.3",
  "webpack-dev-server": "^3.2.1"
},
"dependencies": {
  "prop-types": "^15.7.2",
  "react": "^16.8.3",
  "react-dom": "^16.8.3",
  "react-redux": "^6.0.1",
  "redux": "^4.0.1"
}

```

### EXTRA LINT RULES

We are using [airbnb react/javascript](https://github.com/airbnb/javascript/tree/master/react) codestyles

### SOFTWARE STACK

Frontend part have React+ES6+Webpack applications.
