using System.Data.Entity;
using API.Database;
using API.Database.Entities;

namespace API.Endpoints;

public static class UsersEndpoint
{
    public static void MapUsers(this RouteGroupBuilder app)
    {
        app.MapPost("/", async (ApplicationDbContext dbContext, User user) =>
        {
            dbContext.Users.Add(user);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapGet("/", async (ApplicationDbContext dbContext) =>
        {
            var users = await dbContext.Users.ToListAsync();
            return Results.Ok(users);
        });
        app.MapGet("/{userId}", async (ApplicationDbContext dbContext, int userId) =>
        {
            var user = await dbContext.Users.FindAsync(userId);
            return user == null ? Results.NotFound() : Results.Ok(user);
        });
        app.MapPut("/{userId}", async (ApplicationDbContext dbContext, int userId, User newUser) =>
        {
            var user = await dbContext.Users.FindAsync(userId);
            if (user == null) return Results.NotFound();
            user.GovId = newUser.GovId;
            user.Age = newUser.Age;
            user.UserType = newUser.UserType;
            user.Email = newUser.Email;
            user.PhoneNumber = newUser.PhoneNumber;

            user.Appeals = newUser.Appeals;
            user.AppealsIds = newUser.AppealsIds;
            
            user.LocationId = newUser.LocationId;
            user.Location = newUser.Location;
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapDelete("/{userId}", async (ApplicationDbContext dbContext, int userId) =>
        {
            var user = await dbContext.Users.FindAsync(userId);
            if (user == null) return Results.NotFound();
            dbContext.Users.Remove(user);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
    }
}