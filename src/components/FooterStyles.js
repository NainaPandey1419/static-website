// FooterStyling.js

import footerbg from '../assets/footerbg.jpeg';

export const footerStyles = {
  footerBox: {
    width: '100vw',
    height: '300px',
    position: 'relative',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${footerbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(20%)', 
      zIndex: -1,
    },
  },
  container: {
    paddingTop: 4,
  },
  logoBox: {
    mb: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logoImage: {
    width: '100px',
    height: '45px',
    marginBottom: '10px',
  },
  description: {
    mb: 2,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  socialIcon: {
    color: 'white', 
    fontSize: 24, 
    cursor: 'pointer',
    '&:hover': {
      color: '#f77b24',
      opacity: 0.8
    }
  },
  sectionTitle: {
    color: '#f77b24',
    mb: 2,
    fontWeight: 'bold',
  },
  subscribeTitle: {
    fontWeight: 'bold',
  },
  subscribeForm: {
    mt: 2,
  },
  subscribeInput: {
    bgcolor: 'white',
    borderRadius: '30px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
      '& fieldset': {
        borderRadius: '30px',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: 'black',
      padding: '12px 14px',
      '&::placeholder': {
        color: '#757575',
        opacity: 1,
      },
    },
  },
  subscribeButton: {
    bgcolor: '#f77b24',
    color: 'white',
    borderRadius: '30px',
    '&:hover': {
      bgcolor: '#f77b24',
      opacity: 0.8
    },
    padding: '6px 16px',
    textTransform: 'none',
    fontSize: '16px',
  },
  copyright: {
    mt: 4, 
    width: '100%', 
    py: 2,
  },
};