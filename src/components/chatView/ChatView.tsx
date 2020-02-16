import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './../../styles/ChatView';
const ChatView = (props: any) => {
  const { classes } = props;

  return <div className={classes.content}>Chat View</div>;
};

export default withStyles(styles)(ChatView);
