import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from 'axios';

// Mock the API functions
jest.mock('axios');

test('renders summary section', async () => {
  // Mock the responses for the API calls
  axios.get = jest.fn();
  axios.get.mockResolvedValueOnce({
    data: {
      total: 150,
      countsByType: { grass: 50, fire: 50, water: 50 },
      countsByGeneration: { 'Generation I': 150 },
    },
  });

  axios.get.mockResolvedValueOnce({
    data: [
      { number: 1, name: 'Bulbasaur', generation: 'Generation I', region: 'Kanto', height: 7, weight: 69, types: ['grass', 'poison'], moves: ['Tackle', 'Growl'] },
    ],
  });

  render(
    <Router>
      <Dashboard />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText('Total Pokemon Species')).toBeInTheDocument();
  });

  expect(screen.getByText('150', { selector: 'div.MuiTypography-root' })).toBeInTheDocument();
});
