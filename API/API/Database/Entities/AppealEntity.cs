using System.ComponentModel.DataAnnotations.Schema;

namespace API.Database.Entities;

public class AppealEntity
{
    public int Id { get; init; }
    public DateTime RegistrationTime { get; set; }

    [Column(TypeName = "ntext")] public string Conversation { get; set; }

    public int? AdminId { get; set; }
    public string? AppealType { get; set; }
    public byte? Status { get; set; }
}