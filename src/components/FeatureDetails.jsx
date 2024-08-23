import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Container, Button, useTheme, useMediaQuery } from '@mui/material';
import { featureDetailsStyles } from './FeatureDetailsStyles';

const FeatureDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const featureData = {
    title: decodeURIComponent(title),
    description: location.state?.description
  };

  return (
    <Container sx={featureDetailsStyles.container}>
      <Box sx={featureDetailsStyles.content}>
        <Typography variant="h4" component="h1" sx={featureDetailsStyles.title}>
          {featureData.title}
        </Typography>
        <Typography variant="body1" sx={featureDetailsStyles.description}>
          {featureData.description}
        </Typography>
        
        <Button 
          variant="contained" 
          onClick={() => navigate('/features')} 
          sx={featureDetailsStyles.backButton}
          fullWidth={isMobile}
        >
          Back to Features
        </Button>
      </Box>
    </Container>
  );
};

export default FeatureDetails;