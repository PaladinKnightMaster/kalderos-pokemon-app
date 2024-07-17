import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200], textAlign: 'center' }}>
    <Typography variant="body1">
      &copy; 2024 Kalderos
    </Typography>
  </Box>
);

export default Footer;
