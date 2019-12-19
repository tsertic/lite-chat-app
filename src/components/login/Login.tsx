import React, { useState } from 'react';
import { Paper, Typography, Button, Avatar } from '@material-ui/core';
import { styles } from './../../styles/logIn';
import { withStyles } from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik, Field } from 'formik';
import TextFormField from '../UI/textFormField/TextFormField';
import { auth } from './../../firebase/firebase_utils';
const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
});

const Login = (props: any) => {
  const { classes } = props;
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = (values: yup.InferType<typeof loginSchema>) => {
    const { email, password } = values;
    auth.signInWithEmailAndPassword(email, password).then(
      () => {
        props.history.push('/dashboard');
      },
      error => {
        setErrorMsg(error.message);
      }
    );
  };

  return (
    <div className={classes.logIn}>
      <Paper className={classes.logInFormBox}>
        <Avatar>Icon</Avatar>
        <Typography variant="h5">Log In</Typography>
        <Formik
          validationSchema={loginSchema}
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <Form className={classes.logInForm}>
              <Field
                type="email"
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                component={TextFormField}
                InputProps={{
                  classes: {
                    root: classes.rootInput,

                    focused: classes.rootInput
                  }
                }}
              />

              <Field
                type="password"
                name="password"
                label="password"
                value={values.password}
                InputProps={{
                  classes: {
                    root: classes.rootInput,
                    underline: classes.rootInput,
                    focused: classes.rootInput
                  }
                }}
                onChange={handleChange}
                component={TextFormField}
              />
              {errorMsg && <Typography>{errorMsg}</Typography>}
              <Button type="submit" fullWidth className={classes.submitButton}>
                LOG IN
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);
