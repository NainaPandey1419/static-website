export const headerStyles = {
    appBar: {
      bgcolor: 'background.default',
      color: 'transparent',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
    },
    logo: {
      height: '40px',
      marginRight: '16px',
      cursor: 'pointer',
    },
    menuIcon: {
      color: '#f77b24',
    },
    drawer: {
      width: '85%',
      height: '100%',
      boxShadow: 'none',
    },
    drawerContent: {
      width: '85%',
      height: '100%',
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    },
    drawerLogoContainer: {
      p: 2,
      display: 'flex',
    },
    drawerLogo: {
      height: '60px',
      cursor: 'pointer',
    },
    drawerList: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    drawerListItem: {
      justifyContent: 'center',
    },
    drawerListItemText: {
      '& .MuiListItemText-primary': {
        fontFamily: 'Roboto',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
    menuButton: {
      fontFamily: 'Roboto',
      color: 'black',
      fontWeight: 'bold',
    },
    contactButton: {
      background: 'linear-gradient(90deg, #f77b24 0%, #30a2f7 100%)',
      color: 'black',
      fontWeight: 'bold',
      '&:hover': {
        background: 'linear-gradient(90deg, #f77b24 0%, #30a2f7 100%)',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      ml: 5,
    },
  };