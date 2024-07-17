import React, { useEffect, useState } from 'react';
import { fetchSummary, fetchPokemon } from '../services/api';
import PokemonTable from '../components/PokemonTable';
import SummarySection from '../components/SummarySection';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import { Container, Box } from '@mui/material';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const [filters, setFilters] = useState({
    number: '',
    name: '',
    type: '',
    generation: '',
    move: '',
  });

  useEffect(() => {
    const loadSummary = async () => {
      const data = await fetchSummary();
      setSummary(data);
    };

    const loadPokemon = async () => {
      const data = await fetchPokemon(page, pageSize);
      setPokemon(data);
      setFilteredPokemon(data);
    };

    loadSummary();
    loadPokemon();
  }, [page]);

  useEffect(() => {
    applyFilters();
  }, [filters, pokemon]);

  const applyFilters = () => {
    let filtered = pokemon;
    if (filters.number) {
      filtered = filtered.filter(p => p.number.toString().includes(filters.number));
    }
    if (filters.name) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(filters.name.toLowerCase()));
    }
    if (filters.type) {
      filtered = filtered.filter(p => p.types.includes(filters.type));
    }
    if (filters.generation) {
      filtered = filtered.filter(p => p.generation === filters.generation);
    }
    if (filters.move) {
      filtered = filtered.filter(p => p.moves.some(move => move.toLowerCase().includes(filters.move.toLowerCase())));
    }
    setFilteredPokemon(filtered);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        {summary && <SummarySection summary={summary} />}
        <Filters
          filters={filters}
          setFilters={setFilters}
          types={Object.keys(summary?.countsByType || {})}
          generations={Object.keys(summary?.countsByGeneration || {})}
        />
        <PokemonTable pokemon={filteredPokemon} />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalItems={summary ? summary.total : 0}
          pageSize={pageSize}
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
