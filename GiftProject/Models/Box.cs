namespace GiftProject.Models
{
    public class Box
    {
        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public string img { get; set; }
        public Volume volume { get; set; }
        public List<Description> description { get; set; }
    }
}
