import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './components/login/Login';
//material ui and styles
import './App.css';
import { withStyles } from '@material-ui/core';
import styles from './styles/routingContainer';
import Signup from './components/signup/SignupFormik';
import Dashboard from './components/dashboard/Dashboard';
import { auth } from './firebase/firebase_utils';
const App: React.FC = (props: any) => {
  const [authUser, setAuthUser] = useState(null);
  const { classes } = props;

  useEffect(() => {
    auth.onAuthStateChanged(async (user: any) => {
      if (!user) {
        props.history.push('/login');
      }
      props.history.push('/dashboard');
    });
  }, []);

  return (
    <div className={classes.routingContainer}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default withStyles(styles)(withRouter(App));
