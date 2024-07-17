import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Pokemon Dashboard
      </Typography>
      <Box>
        <MuiLink component={Link} to="/" color="inherit" sx={{ textDecoration: 'none', marginRight: 2 }}>
          Home
        </MuiLink>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
