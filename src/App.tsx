import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/login/Login';
//material ui and styles
import './App.css';
import { withStyles } from '@material-ui/core';
import styles from './styles/routingContainer';
import Signup from './components/signup/SignupFormik';
import Dashboard from './components/dashboard/Dashboard';
const App: React.FC = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.routingContainer}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default withStyles(styles)(App);
