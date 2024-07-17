import React from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const Filters = ({ filters, setFilters, types, generations }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        name="number"
        label="Number"
        variant="outlined"
        value={filters.number}
        onChange={handleInputChange}
      />
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={filters.name}
        onChange={handleInputChange}
      />
      <TextField
        name="move"
        label="Move"
        variant="outlined"
        value={filters.move}
        onChange={handleInputChange}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Type</InputLabel>
        <Select
          name="type"
          value={filters.type}
          onChange={handleInputChange}
          label="Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Generation</InputLabel>
        <Select
          name="generation"
          value={filters.generation}
          onChange={handleInputChange}
          label="Generation"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {generations.map((generation) => (
            <MenuItem key={generation} value={generation}>
              {generation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
