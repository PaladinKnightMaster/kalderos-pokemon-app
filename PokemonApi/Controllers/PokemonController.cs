using Microsoft.AspNetCore.Mvc;
using PokemonApi.Repositories;

namespace PokemonApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PokemonController : ControllerBase
    {
        private readonly IPokemonRepository _repository;

        public PokemonController(IPokemonRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("summary")]
        public IActionResult GetSummary()
        {
            var total = _repository.GetAllPokemon().Count;
            var countsByType = _repository.GetCountsByType();
            var countsByGeneration = _repository.GetCountsByGeneration();

            return Ok(new { total, countsByType, countsByGeneration });
        }

        [HttpGet]
        public IActionResult GetPokemon(int page = 1, int pageSize = 25)
        {
            var pokemon = _repository.GetAllPokemon()
                                     .Skip((page - 1) * pageSize)
                                     .Take(pageSize);
            return Ok(pokemon);
        }

        [HttpGet("{number}")]
        public IActionResult GetPokemonByNumber(int number)
        {
            var pokemon = _repository.GetPokemonByNumber(number);
            if (pokemon == null)
                return NotFound();

            return Ok(pokemon);
        }

        [HttpGet("name/{name}")]
        public IActionResult GetPokemonByName(string name)
        {
            var pokemon = _repository.GetPokemonByName(name);
            if (pokemon == null)
                return NotFound();

            return Ok(pokemon);
        }
    }
}
