namespace API.Database.Entities;

public abstract class Admin
{
    public int Id { get; init; }
    public string? Login { get; set; }
    public string? Password { get; set; }
}