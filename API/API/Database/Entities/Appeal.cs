namespace API.Database.Entities;

public abstract class Appeal
{
    public int Id { get; init; }
    public DateTime RegistrationTime { get; set; }
    public string? AppealType { get; set; }
    public string? Status { get; set; }

    public int? AdminId { get; set; }
    public Admin? Admin { get; set; }
}