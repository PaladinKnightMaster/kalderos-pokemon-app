import React from 'react';
import { render, screen, waitFor, act, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import { fetchPokemonDetail, fetchPokemonDetailByName } from '../services/api';

jest.mock('../services/api');

const mockPokemonDetail = {
  name: 'Bulbasaur',
  number: 1,
  generation: 'Generation I',
  height: 0.7,
  weight: 6.9,
  types: ['grass', 'poison'],
  moves: ['tackle', 'growl'],
  abilities: ['overgrow', 'chlorophyll'],
  evolution: {
    from: '',
    to: ['Ivysaur'],
  },
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

const mockEvolutionDetail = {
  name: 'Ivysaur',
  number: 2,
};

describe('PokemonDetail', () => {
  beforeEach(() => {
    fetchPokemonDetail.mockResolvedValue(mockPokemonDetail);
    fetchPokemonDetailByName.mockResolvedValue(mockEvolutionDetail);
  });

  it('renders Pokemon details', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/pokemon/1']}>
          <Routes>
            <Route path="/pokemon/:number" element={<PokemonDetail />} />
          </Routes>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    });

    const detailsSection = screen.getByRole('article');
    expect(within(detailsSection).getByText('Number:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('1')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Generation:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Generation I')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Height:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('0.7')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Weight:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('6.9')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Moves:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('tackle, growl')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Abilities:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('overgrow, chlorophyll')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Evolution From:')).toBeInTheDocument();
    expect(within(detailsSection).getByText('None')).toBeInTheDocument();
    expect(within(detailsSection).getByText('Evolution To:')).toBeInTheDocument();
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
  });
});
