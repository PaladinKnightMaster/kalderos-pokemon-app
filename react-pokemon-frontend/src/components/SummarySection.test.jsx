import React from 'react';
import { render, screen } from '@testing-library/react';
import SummarySection from './SummarySection';

const mockSummary = {
  total: 150,
  countsByType: {
    grass: 50,
    fire: 50,
    water: 50,
  },
  countsByGeneration: {
    'Generation I': 150,
  },
};

describe('SummarySection', () => {
  it('renders loading message when summary is not provided', () => {
    render(<SummarySection summary={null} />);
    expect(screen.getByText('Loading summary...')).toBeInTheDocument();
  });

  it('renders total Pokemon species', () => {
    render(<SummarySection summary={mockSummary} />);
    expect(screen.getByText('Total Pokemon Species')).toBeInTheDocument();
    expect(screen.getByText(mockSummary.total)).toBeInTheDocument();
  });

  it('renders counts per type', () => {
    render(<SummarySection summary={mockSummary} />);
    expect(screen.getByText('Counts per Type')).toBeInTheDocument();
    Object.entries(mockSummary.countsByType).forEach(([type, count]) => {
      expect(screen.getByText(`${type.charAt(0).toUpperCase() + type.slice(1)}: ${count}`)).toBeInTheDocument();
    });
  });

  it('renders counts per generation', () => {
    render(<SummarySection summary={mockSummary} />);
    expect(screen.getByText('Counts per Generation')).toBeInTheDocument();
    Object.entries(mockSummary.countsByGeneration).forEach(([generation, count]) => {
      expect(screen.getByText(`${generation}: ${count}`)).toBeInTheDocument();
    });
  });

  it('renders type icons if available', () => {
    render(<SummarySection summary={mockSummary} />);
    Object.keys(mockSummary.countsByType).forEach(type => {
      const img = screen.getByAltText(type);
      expect(img).toBeInTheDocument();
    });
  });
});
