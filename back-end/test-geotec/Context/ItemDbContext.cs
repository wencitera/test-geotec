using Microsoft.EntityFrameworkCore;
using test_geotec.Models;

namespace test_geotec.Context
{
    public class ItemDbContext : DbContext
    {
        public ItemDbContext(DbContextOptions<ItemDbContext> options) :
            base(options)
        { 
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }
        public DbSet<Items> Items { get; set; }
    }
}
