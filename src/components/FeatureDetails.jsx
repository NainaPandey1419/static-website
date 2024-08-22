import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, CircularProgress, Button, useTheme, useMediaQuery } from '@mui/material';
import { featureDetailsStyles } from './FeatureDetailsStyles';

const FeatureDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [featureData, setFeatureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchFeatureData = async () => {
      setLoading(true);
      try {
        const data = await new Promise(resolve => 
          setTimeout(() => resolve({
            title: decodeURIComponent(title),
            description: `This is a detailed description of the ${decodeURIComponent(title)} feature.`
          }), 1000)
        );
        setFeatureData(data);
      } catch (error) {
        console.error('Error fetching feature data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (title) {
      fetchFeatureData();
    } else {
      navigate('/features'); 
    }
  }, [title, navigate]);

  if (loading) {
    return (
      <Container sx={featureDetailsStyles.container}>
        <Box sx={featureDetailsStyles.loadingContainer}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!featureData) {
    return (
      <Container sx={featureDetailsStyles.container}>
        <Box sx={featureDetailsStyles.notFoundContainer}>
          <Typography variant="h4" component="h1" sx={featureDetailsStyles.title}>
            Feature not found
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
  }

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