import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { heroStyles } from './HeroStyles';

const Hero = () => {
  return (
    <Box sx={heroStyles.heroBox}>
      <video
        autoPlay
        loop
        muted
        style={heroStyles.video}
      >
        <source src={"https://videos.pexels.com/video-files/8083048/8083048-hd_1920_1080_30fps.mp4"} type="video/mp4" />
      </video>

      <Container maxWidth="lg" sx={heroStyles.container}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={heroStyles.gridItem}>
            <Box sx={heroStyles.contentBox}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={heroStyles.title}
              >
                <span style={{ color: '#fe8535' }}>
                  ECOSYSTEM
                </span>{' '}
                CRAFTED FOR
                <br />
                ALL YOUR
                <br />
                TRAVEL NEEDS
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={heroStyles.subtitle}
              >
                Discover new places, keep your wallet happy, and juggle your travel plans like a pro—without dropping any bookings along the way!
              </Typography>
              <Button
                variant="contained"
                sx={heroStyles.startButton}
              >
                Start Saving
              </Button>
              <Button
                variant="outlined"
                sx={heroStyles.learnButton}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;