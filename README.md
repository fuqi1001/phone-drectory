# Simple Phone Directory

An demo project for a simple Phone Directory application.

Build from `create-react-app`

Used package:

React、axios、node-sass

Set up step:

1. In the root module, run command `npm install` to install dependency for application.

2. run command `npm start`, web application will served in `localhost:3000`


### Ideals

Using functional component to make components clearly and easy to management.

Using React hooks to deal with state to make code more easy read and clearly.

Grab data modify logic to container component to make display components more clearly and just for display.

### Project Tree Structure

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js      --- Container Component 
│   ├── App.scss
│   ├── App.test.js
│   ├── assets      --- assets fold to keep asset files, like images
│   ├── container
│   │   ├── detail
│   │   │   ├── Detail.js      --- contact detail component
│   │   │   └── Detail.scss
│   │   ├── list
│   │   │   ├── List.js      --- directory list component
│   │   │   └── List.scss
│   │   └── nav
│   │       ├── Nav.js      --- navigation bar component
│   │       └── Nav.scss
│   ├── index.css
│   ├── index.js      --- root component
│   ├── logo.svg
│   ├── serviceWorker.js
│   ├── setupTests.js
│   └── utils
└── yarn.lock
```
