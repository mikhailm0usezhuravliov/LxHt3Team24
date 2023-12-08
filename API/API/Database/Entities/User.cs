namespace API.Database.Entities;

public abstract class User
{
    public int Id { get; init; }
    public string? GovId { get; set; }
    public byte? Age { get; set; }   
    public string? UserType { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    
    public List<int>? AppealsIds { get; set; }
    public List<Appeal>? Appeals { get; set; }
    
    public int? LocationId { get; set; }
    public Location? Location { get; set; }
}