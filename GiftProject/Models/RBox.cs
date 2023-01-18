namespace GiftProject.Models
{
    public class RBox
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Filler> fillers { get; set; }
        public string img { get; set; }
        public Box box { get; set; }
        public int price { get; set; }
        public bool onCart { get; set; }
        public string description { get; set; }
    }
}
