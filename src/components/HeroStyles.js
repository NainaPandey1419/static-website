// HeroStyling.js

export const heroStyles = {
    heroBox: {
      position: 'relative',
      overflow: 'hidden',
      py: 5,
      color: 'white',
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    },
    container: {
      position: 'relative',
      zIndex: 1,
    },
    gridItem: {
      animation: 'slideInLeft 1s ease-out',
      '@keyframes slideInLeft': {
        from: {
          opacity: 0,
          transform: 'translateX(-100%)',
        },
        to: {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-10vw',
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
        zIndex: -1,
      },
    },
    contentBox: {
      position: 'relative',
      zIndex: 1,
    },
    title: {
      fontFamily: 'Roboto',
      fontSize: { xs: '36px', md: '54px' },
      fontWeight: '900',
      lineHeight: { xs: '1.2', md: '71.98px' },
      letterSpacing: '0.04em',
      textAlign: 'left',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    },
    subtitle: {
      fontFamily: 'Roboto',
      fontSize: { xs: '18px', md: '24px' },
      fontWeight: '700',
      textAlign: 'left',
      color: '#ffffff',
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
      mb: 4,
    },
    startButton: {
      mr: 2,
      mb: { xs: 2, md: 0 },
      background: 'linear-gradient(90deg, #fe8535 0%, #2a9df4 100%)',
      color: 'white',
      fontWeight: 'bold',
      padding: '10px 20px',
      fontSize: '16px',
      '&:hover': {
        background: 'linear-gradient(90deg, #2a9df4 0%, #fe8535 100%)',
      },
    },
    learnButton: {
      borderColor: '#fe8535',
      borderWidth: 2,
      color: 'white',
      fontWeight: 'bold',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: 'rgba(254, 133, 53, 0.2)',
      '&:hover': {
        borderColor: '#2a9df4',
        backgroundColor: 'rgba(42, 157, 244, 0.3)',
      },
    },
  };