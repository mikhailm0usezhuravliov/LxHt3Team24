namespace API.Database.Entities;

public class AdminEntity
{
    public int Id { get; init; }
    public string? AdminLogin { get; set; }
    public string? PasswordHash { get; set; }
}