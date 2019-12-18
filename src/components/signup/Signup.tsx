import React, { useState } from 'react';
import { auth, firestore } from './../../firebase/firebase_utils';
import { useInputChange } from './../../hooks/useInputChange';
import {
  Paper,
  FormControl,
  Typography,
  Avatar,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './../../styles/signUp';
import { Link } from 'react-router-dom';
const Signup = (props: any) => {
  const { classes } = props;
  const [email, handleEmailChange, resetEmail] = useInputChange('');
  const [password, handlePasswordChange, resetPassword] = useInputChange('');
  const [
    confirmPassword,
    handleConfirmPasswordChange,
    resetConfirmPassword
  ] = useInputChange('');
  const [signUpError, setSignUpError] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSignUpError('Passwords do not match');
      resetPassword();
      resetConfirmPassword();
      return;
    }
    auth.createUserWithEmailAndPassword(email, password).then(
      response => {
        if (response.user != null) {
          const userObject = {
            email: response.user.email
          };
          firestore
            .collection('users')
            .doc(email)
            .set(userObject)
            .then(() => {
              props.history.push('/dashboard');
            });
        }
      },
      authError => {
        console.log(authError);
        setSignUpError('Failed to add user');
      }
    );
  };
  return (
    <div className={classes.signUp}>
      <Paper className={classes.signUpFormBox}>
        <Avatar>Icon</Avatar>
        <Typography variant="h5">Sign Up</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signupEmail">Email</InputLabel>
            <Input
              autoComplete="email"
              id="signupEmail"
              name="email"
              value={email}
              onChange={handleEmailChange}
              autoFocus
            ></Input>
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signupPassword">Password</InputLabel>
            <Input
              id="signupPassword"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              autoFocus
            ></Input>
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signupConfirmPassword">
              Confirm Password
            </InputLabel>
            <Input
              id="signupConfirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              autoFocus
            ></Input>
          </FormControl>
          <Button type="submit" className={classes.submitButton}>
            Submit
          </Button>
        </form>
        {signUpError && <Typography>Error: {signUpError}</Typography>}
        <Typography component="h6" variant="h6">
          Alredy have an Account?
        </Typography>
        <Link to="/login">Log In!</Link>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Signup);
