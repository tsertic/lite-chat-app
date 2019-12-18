import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { styles } from './../../styles/logIn';
import { withStyles } from '@material-ui/core';
const Login = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.logIn}>
      <Paper className={classes.logInFormBox}>
        <Typography>Log In</Typography>
        <form className={classes.logInForm}></form>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);
