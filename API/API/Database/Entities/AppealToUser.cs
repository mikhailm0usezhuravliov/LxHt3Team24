namespace API.Database.Entities;

public class AppealToUser
{
    public int Id { get; init; }
    public int AppealId { get; set; }
    public int UserId { get; set; }
}