using API.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Database;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<UserEntity> Users { get; init; } = null!;
    public DbSet<AppealToUser> AppealHouse { get; init; } = null!;
    public DbSet<AdminEntity> Admins { get; init; } = null!;
    public DbSet<AppealEntity> Appeals { get; init; } = null!;
    public DbSet<LocationEntity> Locations { get; init; } = null!;
}