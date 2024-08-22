import React from 'react';
import { Box, Typography, Grid, Container, useTheme, useMediaQuery } from '@mui/material';
import { benefitsStyles } from './BenefitsStyles';

const Benefits = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={benefitsStyles.mainBox(isSmDown, isMdDown)}>
      <Container maxWidth="lg">
        <Grid container spacing={isMdDown ? 4 : 8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={benefitsStyles.accentBar} />
              <Typography 
                variant="h2" 
                component="h2"
                sx={benefitsStyles.heading(isSmDown, isMdDown)}
              >
                Save your travel money in Dashtiny and get top grade security with us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={benefitsStyles.contentBox(isSmDown)}>
              <Typography paragraph>
                There are so many benefits of travelling with Dashtiny. Not only do we provide you with an awesome digital travel solution, an awesome travel app, but we also make it super easy and fun for you to store, save and move your travel money.
              </Typography>
              <Typography>
                As well as saving money, the Dashtiny travel fund is a good way to track your travel money. Tracking Expenses is important when travelling as you don't want to be stuck in the middle of your journey budgeting your travel. We created the travel fund so you can store all your travel money and then track your money from your travel fund expense tracker.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;