import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonTable from './PokemonTable';
import '@testing-library/jest-dom/extend-expect';

const mockPokemon = [
  {
    number: 1,
    name: 'Bulbasaur',
    generation: 'Generation I',
    region: 'Kanto',
    height: 0.7,
    weight: 6.9,
    types: ['grass', 'poison'],
    moves: ['tackle', 'growl'],
  },
  {
    number: 4,
    name: 'Charmander',
    generation: 'Generation I',
    region: 'Kanto',
    height: 0.6,
    weight: 8.5,
    types: ['fire'],
    moves: ['scratch', 'ember'],
  },
  {
    number: 7,
    name: 'Squirtle',
    generation: 'Generation I',
    region: 'Kanto',
    height: 0.5,
    weight: 9.0,
    types: ['water'],
    moves: ['tackle', 'water gun'],
  },
];

describe('PokemonTable', () => {
  it('renders Pokemon table', () => {
    render(
      <MemoryRouter>
        <PokemonTable pokemon={mockPokemon} />
      </MemoryRouter>
    );

    expect(screen.getByText('Number')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Generation')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('Type 1')).toBeInTheDocument();
    expect(screen.getByText('Type 2')).toBeInTheDocument();
    expect(screen.getByText('Moves Count')).toBeInTheDocument();

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.getByText('Squirtle')).toBeInTheDocument();
  });

  it('sorts the table by number', async () => {
    render(
      <MemoryRouter>
        <PokemonTable pokemon={mockPokemon} />
      </MemoryRouter>
    );

    const numberHeader = screen.getByText('Number');
    fireEvent.click(numberHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('1BulbasaurGeneration IKanto0.76.9grasspoison2');
      expect(rows[2]).toHaveTextContent('4CharmanderGeneration IKanto0.68.5fire2');
      expect(rows[3]).toHaveTextContent('7SquirtleGeneration IKanto0.59water2');
    });

    fireEvent.click(numberHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('7SquirtleGeneration IKanto0.59water2');
      expect(rows[2]).toHaveTextContent('4CharmanderGeneration IKanto0.68.5fire2');
      expect(rows[3]).toHaveTextContent('1BulbasaurGeneration IKanto0.76.9grasspoison2');
    });
  });

  it('sorts the table by name', async () => {
    render(
      <MemoryRouter>
        <PokemonTable pokemon={mockPokemon} />
      </MemoryRouter>
    );

    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Bulbasaur');
      expect(rows[2]).toHaveTextContent('Charmander');
      expect(rows[3]).toHaveTextContent('Squirtle');
    });

    fireEvent.click(nameHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Squirtle');
      expect(rows[2]).toHaveTextContent('Charmander');
      expect(rows[3]).toHaveTextContent('Bulbasaur');
    });
  });
});
