var React = require('react');
var ReactDOM = require ("react-dom");
var Photon = require('@silvia-odwyer/photon');

window.React = React
window.Photon = Photon

ReactDOM.render(
  React.createElement("h1", null, "React"),
  document.getElementById("app"))
