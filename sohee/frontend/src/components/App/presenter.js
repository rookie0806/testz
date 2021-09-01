import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router";
import "./styles.module.scss";
import Main from "../Main";
import { connect } from "react-redux";
const App = props => [
  <PublicRoutes key={1} />,
];

const PublicRoutes = props => (
  <Switch>
      <Route exact path="/" component={Main}/>
  </Switch>
);

App.propTypes = {

};


export default withRouter(connect()(App))