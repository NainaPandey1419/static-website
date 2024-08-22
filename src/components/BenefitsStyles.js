import benifitsbg from '../assets/benifitsbg.jpeg';

export const benefitsStyles = {
  mainBox: (isSmDown, isMdDown) => ({
    position: 'relative',
    color: 'white',
    height: isSmDown ? '1500px' : isMdDown ? '700px' : '600px',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${benifitsbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(40%)',
      zIndex: -1,
    },
  }),
  accentBar: {
    width: '80px',
    height: '4px',
    backgroundColor: '#f77b24',
    mb: 2,
  },
  heading: (isSmDown, isMdDown) => ({
    fontFamily: 'Nunito Sans',
    fontSize: isSmDown ? '36px' : isMdDown ? '44px' : '54px',
    fontWeight: 800,
    lineHeight: 1.2,
    textAlign: 'left',
    color: 'white',
  }),
  contentBox: (isSmDown) => ({
    width: '100%',
    maxWidth: '477px',
    fontFamily: 'Nunito Sans',
    fontSize: isSmDown ? '18px' : '24px',
    fontWeight: 600,
    lineHeight: isSmDown ? '24px' : '32.74px',
    textAlign: 'left',
    color: 'white',
  }),
};