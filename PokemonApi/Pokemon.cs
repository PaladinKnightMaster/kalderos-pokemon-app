namespace PokemonApi.Models
{
    public class Pokemon
    {
        public int Number { get; set; }
        public string Name { get; set; }
        public string Generation { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public List<string> Types { get; set; }
        public List<Stat> Stats { get; set; }
        public List<string> Moves { get; set; }
        public List<string> Abilities { get; set; }
        public Evolution Evolution { get; set; }
        public string Image { get; set; }
    }

    public class Stat
    {
        public string Name { get; set; }
        public int Value { get; set; }
    }

    public class Evolution
    {
        public string From { get; set; }
        public List<string> To { get; set; }
    }
}
