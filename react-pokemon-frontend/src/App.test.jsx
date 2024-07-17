import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';

// Mock API responses
jest.mock('axios');

test('renders header with "Pokemon Dashboard"', async () => {
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
      <App />
    </Router>
  );

  const headerElement = await screen.findByText(/Pokemon Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
