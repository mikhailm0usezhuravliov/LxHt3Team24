using System.Data.Entity;
using API.Database;
using API.Database.Entities;

namespace API.Endpoints;

public static class LocationsEndpoint
{
    public static void MapLocations(this RouteGroupBuilder app)
    {
        app.MapPost("/", async (ApplicationDbContext dbContext, LocationEntity location) =>
        {
            dbContext.Locations.Add(location);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
        app.MapGet("/", async (ApplicationDbContext dbContext) =>
        {
            var locations = await dbContext.Locations.ToListAsync();
            return Results.Ok(locations);
        });
        app.MapGet("/{locationId}", async (ApplicationDbContext dbContext, int locationId) =>
        {
            var location = await dbContext.Locations.FindAsync(locationId);
            return location == null ? Results.NotFound() : Results.Ok(location);
        });
        app.MapPut("/{locationId}",
            async (ApplicationDbContext dbContext, int locationId, LocationEntity newLocation) =>
            {
                var location = await dbContext.Locations.FindAsync(locationId);
                if (location == null) return Results.NotFound();
                location.Location = newLocation.Location;
                await dbContext.SaveChangesAsync();
                return Results.Ok();
            });
        app.MapDelete("/{locationId}", async (ApplicationDbContext dbContext, int locationId) =>
        {
            var location = await dbContext.Locations.FindAsync(locationId);
            if (location == null) return Results.NotFound();
            dbContext.Locations.Remove(location);
            await dbContext.SaveChangesAsync();
            return Results.Ok();
        });
    }
}