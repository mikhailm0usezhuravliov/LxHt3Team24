using System.Data.Entity;
using API.Database;
using API.Database.Entities;

namespace API.Endpoints;

public static class AdminsEndpoint
{
    public static void MapAdmins(this RouteGroupBuilder app)
    {
        app.MapPost("/", async (ApplicationDbContext dbContext, Admin admin) =>
        {
            dbContext.Admins.Add(admin);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapGet("/", async (ApplicationDbContext dbContext) =>
        {
            var admins = await dbContext.Admins.ToListAsync();
            return Results.Ok(admins);
        });
        app.MapGet("/{adminId}", async (ApplicationDbContext dbContext, int adminId) =>
        {
            var admin = await dbContext.Admins.FindAsync(adminId);
            return admin == null ? Results.NotFound() : Results.Ok(admin);
        });
        app.MapPut("/{adminId}", async (ApplicationDbContext dbContext, int adminId, Admin newAdmin) =>
        {
            var admin = await dbContext.Admins.FindAsync(adminId);
            if (admin == null) return Results.NotFound();
            admin.Login = newAdmin.Login;
            admin.Password = newAdmin.Password;
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapDelete("/{adminId}", async (ApplicationDbContext dbContext, int adminId) =>
        {
            var admin = await dbContext.Admins.FindAsync(adminId);
            if (admin == null) return Results.NotFound();
            dbContext.Admins.Remove(admin);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
    }
}