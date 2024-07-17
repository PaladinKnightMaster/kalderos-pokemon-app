import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';

const SummarySection = ({ summary }) => {
  if (!summary) {
    return <div>Loading summary...</div>;
  }

  const getTypeIcon = (type) => {
    try {
      return require(`../assets/images/icons/icon-type-${type}.png`);
    } catch (err) {
      return null;  // Return null if the icon is not found
    }
  };

  return (
    <Card sx={{ mb: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center' }}>
          Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              Total Pokemon Species
            </Typography>
            <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
              {summary.total}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              Counts per Type
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {summary.countsByType && Object.entries(summary.countsByType).map(([type, count]) => (
                <Box key={type} sx={{ display: 'flex', alignItems: 'center', width: '50%', mt: 1 }}>
                  {getTypeIcon(type) ? (
                    <Avatar
                      src={getTypeIcon(type)}
                      alt={type}
                      sx={{ width: 24, height: 24, mr: 1, bgcolor: 'transparent' }}
                    />
                  ) : (
                    <Box sx={{ width: 24, height: 24, mr: 1 }} />
                  )}
                  <Typography variant="body1">
                    {type.charAt(0).toUpperCase() + type.slice(1)}: {count}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              Counts per Generation
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              {summary.countsByGeneration && Object.entries(summary.countsByGeneration).map(([generation, count]) => (
                <Typography variant="body1" key={generation} sx={{ mt: 1 }}>
                  {generation}: {count}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummarySection;
