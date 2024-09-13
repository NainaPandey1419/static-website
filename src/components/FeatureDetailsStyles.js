export const featureDetailsStyles = {
  container: {
    py: 8,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paper: {
    p: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color:'black'
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    color: '#f77b24',
    mb: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    color: '#333',
    mb: 4,
    textAlign: 'center',
  },
  benefitsContainer: {
    mb: 4,
  },
  benefitItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: 48,
    color: '#f77b24',
    mb: 2,
  },
  sectionTitle: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 600,
    color: '#333',
    mb: 2,
  },
  benefitsList: {
    paddingLeft: '20px',
    marginBottom: '24px',
  },
  benefitItem: {
    marginBottom: '8px',
  },
  backButton: {
    backgroundColor: '#f77b24',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e66d1f',
    },
  },
};