const React = require('react');
const createRoot = require('react-dom/client').createRoot;
const App = require('./App');

const container = document.getElementById("root")

const execute = createRoot(container);

execute.render(React.createElement(App));
