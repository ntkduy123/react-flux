"use strict";

var React = require('react');

var About = React.createClass({
    // statics: {
    //   willTransitionTo: function (transition, params, query, callback) {
    //       if (!confirm('Are you sure ?')) {
    //           transition.about();
    //       }
    //       else {
    //           callback();
    //       }
    //   },
    //   willTransitionFrom: function (transition, params, query, callback) {
    //       if (!confirm('Are you sure ?')) {
    //           transition.about();
    //       }
    //       else {
    //           callback();
    //       }
    //   }
    // },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;