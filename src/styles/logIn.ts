const styles = (theme: any) => {
  return {
    logIn: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logInFormBox: {
      width: '500px',
      borderTopLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '2px 2px 6px rgba(134,231,100,0.9)',
      padding: theme.spacing(4)
    }
  };
};

export { styles };
