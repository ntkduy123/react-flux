"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/App');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var NotFound = require('./components/notFoundPage');
var ManageAuthor = require('./components/authors/manageAuthorPage');


var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="authors" handler={Authors}/>
        <Route name="about" handler={About}/>
        <Route name="addAuthor" handler={ManageAuthor}/>
        <Route name="manageAuthor" path="author/:id" handler={ManageAuthor} />
        <NotFoundRoute handler={NotFound} />
        <Redirect from="about-us" to="about" />
    </Route>
);

module.exports = routes;