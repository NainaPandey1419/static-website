import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { headerStyles } from './HeaderStyles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'Features', 'Blog', 'Services', 'Contact Us'];

  const handleMenuItemClick = (item) => {
    switch(item) {
      case 'Home':
        navigate('/');
        break;
      case 'Features':
        navigate('/features');
        break;
      // Add more cases for other menu items as needed
      default:
        // For items without specific routes, you can add a default behavior or leave it empty
        break;
    }
    setDrawerOpen(false);
  };

  const drawer = (
    <Box sx={headerStyles.drawerContent}>
      <Box sx={headerStyles.drawerLogoContainer}>
        <img src={logo} alt="logo" style={headerStyles.drawerLogo} onClick={() => navigate('/')}/>
      </Box>
      <List sx={headerStyles.drawerList}>
        {menuItems.map((item) => (
          <ListItem button key={item} sx={headerStyles.drawerListItem} onClick={() => handleMenuItemClick(item)}>
            <ListItemText 
              primary={item} 
              sx={headerStyles.drawerListItemText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={headerStyles.appBar} elevation={0}>
      <Toolbar>
        {!isMobile && (
          <Box sx={headerStyles.logoContainer}>
            <img src={logo} alt="logo" style={headerStyles.logo} onClick={() => navigate('/')} />
          </Box>
        )}
        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={headerStyles.menuIcon} />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: headerStyles.drawer,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button 
                key={item}
                color="inherit" 
                sx={headerStyles.menuButton}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={headerStyles.contactButton}
              onClick={() => handleMenuItemClick('Contact Us')}
            >
              Contact Us
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;