import React, { useState } from 'react';
import { auth, firestore } from './../../firebase/firebase_utils';
import {
  Paper,
  FormControl,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './../../styles/signUp';
import { Link } from 'react-router-dom';
import TextFormField from '../UI/textFormField/TextFormField';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Signup = (props: any) => {
  const { classes } = props;
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = (values: yup.InferType<typeof schema>) => {
    const { password, email } = values;

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
        setErrorMsg(authError.message);
      }
    );
  };
  return (
    <div className={classes.signUp}>
      <Paper className={classes.signUpFormBox}>
        <Avatar>Icon</Avatar>
        <Typography variant="h5">Sign Up</Typography>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            abc: ''
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm({});
            console.log(values);
          }}
        >
          {({ values, handleChange }) => (
            <Form className={classes.form}>
              <FormControl required fullWidth margin="normal">
                <Field
                  type="email"
                  name="email"
                  label="email"
                  value={values.email}
                  onChange={handleChange}
                  component={TextFormField}
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <Field
                  name="password"
                  type="password"
                  label="password"
                  value={values.password}
                  onChange={handleChange}
                  component={TextFormField}
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <Field
                  type="password"
                  name="confirmPassword"
                  label="confirm password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  component={TextFormField}
                />
              </FormControl>
              <Button type="submit" className={classes.submitButton}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        {errorMsg && <Typography>{errorMsg}</Typography>}
        <Typography component="h6" variant="h6">
          Alredy have an Account?
        </Typography>
        <Link to="/login">Log In!</Link>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Signup);
