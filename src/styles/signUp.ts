const styles = (theme: any) => {
  return {
    signUp: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    signUpFormBox: {
      width: '500px',
      borderTopLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '2px 2px 6px rgba(134,231,100,0.9)',
      padding: theme.spacing(4)
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column'
    },
    submitButton: {
      marginTop: theme.spacing(2),
      '&:hover': {
        background: 'lightgreen'
      }
    }
  };
};

export default styles;
