const styles = (theme: any) => {
  return {
    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto' as 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box' as 'border-box',
      overflowY: 'scroll' as 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute' as 'absolute'
    },
    userSent: {
      float: 'left' as 'left',
      clear: 'both' as 'both',
      padding: '20px',
      boxSizing: 'border-box' as 'border-box',
      wordWrap: 'break-word' as 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: '#fff',
      width: '300px',
      borderRadius: '10px'
    },

    friendSent: {
      float: 'right' as 'right',
      clear: 'both' as 'both',
      padding: '20px',
      boxSizing: 'border-box' as 'border-box',
      wordWrap: 'break-word' as 'break-word',
      marginTop: '10px',
      backgroundColor: '#707BC4',
      color: '#fff',
      width: '300px',
      borderRadius: '10px'
    },

    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '50px',
      backgroundColor: '#344195',
      position: 'fixed' as 'fixed',
      marginLeft: '301px',
      fontSize: '18px',
      textAlign: 'center' as 'center',
      color: '#fff',
      paddingTop: '10px',
      boxSizing: 'border-box' as 'border-box'
    }
  };
};

export default styles;
