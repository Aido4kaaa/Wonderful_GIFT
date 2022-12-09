namespace GiftProject.Models
{
    public class FilledBox
    {
        public int id { get; set; }
        public List<Filler> fillers { get; set; }
        public Box box { get; set; }
    }
}
