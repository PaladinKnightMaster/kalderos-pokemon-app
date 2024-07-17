import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import SortIcon from '@mui/icons-material/Sort';

const PokemonTable = ({ pokemon }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedPokemon = [...pokemon].sort((a, b) => {
    if (sortConfig.key) {
      const isAsc = sortConfig.direction === 'asc';
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return isAsc ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return isAsc ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'number'}
                direction={sortConfig.key === 'number' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('number')}
              >
                Number
                {sortConfig.key === 'number' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'name'}
                direction={sortConfig.key === 'name' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('name')}
              >
                Name
                {sortConfig.key === 'name' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'generation'}
                direction={sortConfig.key === 'generation' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('generation')}
              >
                Generation
                {sortConfig.key === 'generation' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
            <TableCell>Region</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'height'}
                direction={sortConfig.key === 'height' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('height')}
              >
                Height
                {sortConfig.key === 'height' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'weight'}
                direction={sortConfig.key === 'weight' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('weight')}
              >
                Weight
                {sortConfig.key === 'weight' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
            <TableCell>Type 1</TableCell>
            <TableCell>Type 2</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === 'moves.length'}
                direction={sortConfig.key === 'moves.length' ? sortConfig.direction : 'asc'}
                onClick={() => requestSort('moves.length')}
              >
                Moves Count
                {sortConfig.key === 'moves.length' && <SortIcon />}
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedPokemon.map((p) => (
            <TableRow key={p.number}>
              <TableCell>{p.number}</TableCell>
              <TableCell><Link to={`/pokemon/${p.number}`}>{p.name}</Link></TableCell>
              <TableCell>{p.generation}</TableCell>
              <TableCell>{p.region}</TableCell>
              <TableCell>{p.height}</TableCell>
              <TableCell>{p.weight}</TableCell>
              <TableCell>{p.types[0]}</TableCell>
              <TableCell>{p.types[1]}</TableCell>
              <TableCell>{p.moves.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
