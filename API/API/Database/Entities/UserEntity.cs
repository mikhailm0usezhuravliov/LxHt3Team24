namespace API.Database.Entities;

public class UserEntity
{
    public int Id { get; init; }
    public int? Age { get; set; }
    public string? Location { get; set; }
    public string? UserType { get; set; }
    public string? PhoneNumber { get; set; }
    public string? GovId { get; set; }
    public string? Email { get; set; }
    public int AppealsCount { get; set; }
}