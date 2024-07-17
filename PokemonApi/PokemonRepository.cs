using Newtonsoft.Json;
using PokemonApi.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace PokemonApi.Repositories
{
    public interface IPokemonRepository
    {
        List<Pokemon> GetAllPokemon();
        Pokemon GetPokemonByNumber(int number);
        Pokemon GetPokemonByName(string name);
        Dictionary<string, int> GetCountsByType();
        Dictionary<string, int> GetCountsByGeneration();
    }

    public class PokemonRepository : IPokemonRepository
    {
        private readonly List<Pokemon> _pokemon;

        public PokemonRepository()
        {
            _pokemon = JsonConvert.DeserializeObject<List<Pokemon>>(File.ReadAllText("pokemon.json"));
        }

        public List<Pokemon> GetAllPokemon()
        {
            return _pokemon;
        }

        public Pokemon GetPokemonByNumber(int number)
        {
            return _pokemon.FirstOrDefault(p => p.Number == number);
        }

        public Pokemon GetPokemonByName(string name)
        {
            return _pokemon.FirstOrDefault(p => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        }

        public Dictionary<string, int> GetCountsByType()
        {
            return _pokemon.SelectMany(p => p.Types)
                           .GroupBy(t => t)
                           .ToDictionary(g => g.Key, g => g.Count());
        }

        public Dictionary<string, int> GetCountsByGeneration()
        {
            return _pokemon.GroupBy(p => p.Generation)
                           .ToDictionary(g => g.Key, g => g.Count());
        }
    }
}
