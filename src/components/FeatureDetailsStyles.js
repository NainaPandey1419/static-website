export const featureDetailsStyles = {
    container: {
      color: 'black',
      px: { xs: 2, sm: 3, md: 4 }, 
      maxWidth: { sm: '100%', md: '80%', lg: '60%' }, 
    },
    content: {
      mt: { xs: 2, sm: 3, md: 4 },
    },
    title: {
      fontWeight: 'bold',
      mb: 2,
      fontSize: { xs: '24px', sm: '32px', md: '40px' }, 
    },
    description: {
      mb: 3,
      fontSize: { xs: '16px', sm: '17.6px', md: '19.2px' }, 
    },
    backButton: {
      mt: 2,
      mb:3,
      bgcolor: '#f77b24',
      '&:hover': {
        bgcolor: '#d15e0a',
      },
      fontSize: { xs: '12.8px', sm: '14.4px', md: '16px' }, 
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      mt: { xs: 2, sm: 3, md: 4 },
    },
    notFoundContainer: {
      mt: { xs: 2, sm: 3, md: 4 },
    },
  };
  