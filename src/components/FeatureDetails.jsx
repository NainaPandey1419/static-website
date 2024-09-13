import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Container, Button, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { featureDetailsStyles } from './FeatureDetailsStyles';

const FeatureDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const featureData = {
    title: decodeURIComponent(title),
    description: location.state?.description || "Explore our community features and connect with like-minded travelers.",
    benefits: [
      "Connect with fellow travelers",
      "Share experiences and tips",
      "Plan group adventures"
    ]
  };

  return (
    <Container maxWidth="lg" sx={featureDetailsStyles.container}>
      <Paper elevation={3} sx={featureDetailsStyles.paper}>
        <Typography variant="h2" component="h1" sx={featureDetailsStyles.title}>
          {featureData.title}
        </Typography>
        <Typography variant="h5" sx={featureDetailsStyles.subtitle}>
          {featureData.description}
        </Typography>
        
        <Grid container spacing={4} sx={featureDetailsStyles.benefitsContainer}>
          <Grid item xs={12} md={4}>
            <Box sx={featureDetailsStyles.benefitItem}>
              <GroupIcon sx={featureDetailsStyles.icon} />
              <Typography variant="h6">Connect</Typography>
              <Typography>Meet travelers with similar interests</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={featureDetailsStyles.benefitItem}>
              <ForumIcon sx={featureDetailsStyles.icon} />
              <Typography variant="h6">Share</Typography>
              <Typography>Exchange travel stories and advice</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={featureDetailsStyles.benefitItem}>
              <EmojiEventsIcon sx={featureDetailsStyles.icon} />
              <Typography variant="h6">Achieve</Typography>
              <Typography>Reach travel goals together</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Typography variant="h5" sx={featureDetailsStyles.sectionTitle}>
          Key Benefits
        </Typography>
        <ul style={featureDetailsStyles.benefitsList}>
          {featureData.benefits.map((benefit, index) => (
            <li key={index} style={featureDetailsStyles.benefitItem}>
              <Typography variant="body1">{benefit}</Typography>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="contained" 
          onClick={() => navigate('/features')} 
          sx={featureDetailsStyles.backButton}
          fullWidth={isMobile}
        >
          Back to Features
        </Button>
      </Paper>
    </Container>
  );
};

export default FeatureDetails;