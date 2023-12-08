namespace API.Database.Entities;

public abstract class Location
{
    public int Id { get; init; }
    public string? Region { get; set; }
}