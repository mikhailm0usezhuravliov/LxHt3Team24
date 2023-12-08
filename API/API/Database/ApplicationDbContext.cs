using API.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Database;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    public DbSet<User> Users { get; init; } = null!;
    public DbSet<Admin> Admins { get; init; } = null!;
    public DbSet<Appeal> Appeals { get; init; } = null!;
    public DbSet<Location> Locations { get; init; } = null!;
}