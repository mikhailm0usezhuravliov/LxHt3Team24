using System.Data.Entity;
using API.Database;
using API.Database.Entities;

namespace API.Endpoints;

public static class AppealsEndpoint
{
    public static void MapAppeals(this RouteGroupBuilder app)
    {
        app.MapPost("/", async (ApplicationDbContext dbContext, Appeal appeal) =>
        {
            dbContext.Appeals.Add(appeal);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapGet("/", async (ApplicationDbContext dbContext) =>
        {
            var appeals = await dbContext.Appeals.ToListAsync();
            return Results.Ok(appeals);
        });
        app.MapGet("/{appealId}", async (ApplicationDbContext dbContext, int appealId) =>
        {
            var appeal = await dbContext.Appeals.FindAsync(appealId);
            return appeal == null ? Results.NotFound() : Results.Ok(appeal);
        });
        app.MapPut("/{appealId}", async (ApplicationDbContext dbContext, int appealId, Appeal newAppeal) =>
        {
            var appeal = await dbContext.Appeals.FindAsync(appealId);
            if (appeal == null) return Results.NotFound();
            appeal.RegistrationTime = newAppeal.RegistrationTime;
            appeal.Status = newAppeal.Status;
            appeal.Type = newAppeal.Type;

            appeal.AdminId = newAppeal.AdminId;
            appeal.Admin = newAppeal.Admin;
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapDelete("/{appealId}", async (ApplicationDbContext dbContext, int appealId) =>
        {
            var appeal = await dbContext.Appeals.FindAsync(appealId);
            if (appeal == null) return Results.NotFound();
            dbContext.Appeals.Remove(appeal);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
    }
}