import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPokemonDetail, fetchPokemonDetailByName } from '../services/api';
import { Card, CardContent, Typography, Grid, Avatar, Box } from '@mui/material';

const PokemonDetail = () => {
  const { number } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadPokemonDetail = async () => {
      const data = await fetchPokemonDetail(number);
      setPokemon(data);
    };
    loadPokemonDetail();
  }, [number]);

  if (!pokemon) return <div>Loading...</div>;

  const EvolutionLink = ({ name }) => {
    const [evolutionDetail, setEvolutionDetail] = useState(null);

    useEffect(() => {
      const loadEvolutionDetail = async () => {
        const data = await fetchPokemonDetailByName(name);
        setEvolutionDetail(data);
      };
      loadEvolutionDetail();
    }, [name]);

    if (!evolutionDetail) return null;

    return <Link to={`/pokemon/${evolutionDetail.number}`}>{name}</Link>;
  };

  const getTypeIcon = (type) => {
    try {
      return require(`../assets/images/icons/icon-type-${type}.png`);
    } catch (err) {
      return null;  // Return null if the icon is not found
    }
  };

  return (
    <Card sx={{ p: 2 }} role="article">
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center' }}>
          {pokemon.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src={pokemon.image}
                alt={pokemon.name}
                sx={{ width: 128, height: 128 }}
                variant="rounded"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <strong>Number:</strong> {pokemon.number}
            </Typography>
            <Typography variant="body1">
              <strong>Generation:</strong> {pokemon.generation}
            </Typography>
            <Typography variant="body1">
              <strong>Height:</strong> {pokemon.height}
            </Typography>
            <Typography variant="body1">
              <strong>Weight:</strong> {pokemon.weight}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography variant="body1">
                <strong>Types:</strong>
              </Typography>
              {pokemon.types.map((type) => (
                <Avatar
                  key={type}
                  src={getTypeIcon(type)}
                  alt={type}
                  sx={{ width: 24, height: 24, bgcolor: 'transparent', ml: 1 }}
                />
              ))}
            </Box>
            <Typography variant="body1">
              <strong>Moves:</strong> {pokemon.moves.join(', ')}
            </Typography>
            <Typography variant="body1">
              <strong>Abilities:</strong> {pokemon.abilities.join(', ')}
            </Typography>
            <Typography variant="body1">
              <strong>Evolution From:</strong> {pokemon.evolution.from ? <EvolutionLink name={pokemon.evolution.from} /> : 'None'}
            </Typography>
            <Typography variant="body1">
              <strong>Evolution To:</strong> {pokemon.evolution.to ? pokemon.evolution.to.map(evo => <EvolutionLink key={evo} name={evo} />) : 'None'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonDetail;
