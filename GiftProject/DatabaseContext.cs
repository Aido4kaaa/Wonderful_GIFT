using GiftProject.Models;
using Microsoft.EntityFrameworkCore;

namespace GiftProject
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Description> Descriptions { get; set; }
        public DbSet<Filler> Fillers { get; set; }
        public DbSet<Box> Boxes { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<FilledBox> FilledBoxes { get; set; }
        public DbSet<Volume> Volumes { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
    }
}
