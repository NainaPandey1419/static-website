import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import FlipIcon from '@mui/icons-material/Flip';
import "../App.css";
import { featureStyles } from "./FeaturesStyles";

const Feature = ({ videoSrc, title, description, onFeatureClick }) => {
  const handleClick = () => {
    onFeatureClick(title);
  };

  return (
    <Card
      className="card-hover"
      onClick={handleClick}
      sx={featureStyles.card}
    >
      <Box
        className="card-inner"
        sx={featureStyles.cardInner}
      >
        <Box sx={featureStyles.cardFace}>
          <Box
            component="video"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            sx={featureStyles.video}
          />
          <CardContent sx={featureStyles.cardContent}>
            <Typography
              variant="h6"
              component="h3"
              sx={featureStyles.title}
            >
              {title}
            </Typography>
            <Box
              className="flip-icon"
              sx={featureStyles.flipIcon}
            >
              <Typography variant="body2">Click to see more</Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};
const Features = () => {
  const navigate = useNavigate();

  
const features = [
  {
    title: "The Ultimate Aggregator",
    description: "Compare leading and local listing companies' offerings.",
    videoSrc: "https://videos.pexels.com/video-files/27130480/12081386_2560_1440_30fps.mp4"
  },
  {
    title: "DT Community",
    description: "Community of people with the same interests.",
    videoSrc: "https://videos.pexels.com/video-files/4625285/4625285-hd_1920_1080_25fps.mp4"
  },
  {
    title: "DT Shop",
    description: "Marketplace provision to rent or buy equipment for your getaways.",
    videoSrc: "https://videos.pexels.com/video-files/7568747/7568747-hd_1920_1080_25fps.mp4"
  },
  {
    title: "Services",
    description: "Hire our people like visa agents, car drivers, local guides, travel agency.",
    videoSrc: "https://videos.pexels.com/video-files/5927780/5927780-hd_1920_1080_30fps.mp4"
  },
  {
    title: "Campanion",
    description: "Find a companion to travel or go to a movie with.",
    videoSrc: "https://videos.pexels.com/video-files/5080871/5080871-uhd_2732_1440_25fps.mp4"
  },
  {
    title: "DAIna",
    description: "AI Based Assistant",
    videoSrc: "https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
  }
];

const handleFeatureClick = (title, description) => {
  navigate(`/feature/${encodeURIComponent(title)}`, { state: { description } });
};

  return (
    <Box sx={featureStyles.featuresBox}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={featureStyles.featuresTitle}
        >
          <span style={{ color: "#f77b24" }}>Who We Are?</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={featureStyles.featuresDescription}
        >
          Introducing DASHTINY, where your travel becomes effortless. We're a
          seamless all-in-one ecosystem to handle every facet of your travel
          plans. From booking to exploration, Dashtiny ensures your getaways are
          smooth and enjoyable. With our tailored solutions, you'll experience
          travel like never before. Say goodbye to the stress of planning and
          hello to a new era of effortless adventures. Dive into a world where
          your travel dreams come to life with ease.
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 0 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Feature
                videoSrc={feature.videoSrc}
                title={feature.title}
                description={feature.description}
  onFeatureClick={(title) => handleFeatureClick(feature.title, feature.description)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;