using System.Data;
using API.Database;
using API.Database.Entities;
using ClosedXML.Excel;
using Microsoft.EntityFrameworkCore;

namespace API.Endpoints;

public static class UsersEndpoint
{
    public static void MapUsers(this RouteGroupBuilder app)
    {
        app.MapPost("/", async (ApplicationDbContext dbContext, UserEntity user) =>
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
        app.MapGet("/exportToExcel", async (ApplicationDbContext dbContext) =>
        {
            var now = DateTime.Now;
            var users = await dbContext.Users.ToListAsync();
            var fileName = $"Users {now}.xlsx";
            var dataTable = new DataTable("People");
            dataTable.Columns.AddRange(new DataColumn[]
            {
                new("Id"),
                new("Age"),
                new("Location"),
                new("UserType"),
                new("PhoneNumber"),
                new("GovId"),
                new("Email"),
                new("AppealsCount")
            });

            foreach (var user in users)
                dataTable.Rows.Add(user.Id, user.Age, user.Location, user.UserType, user.PhoneNumber, user.GovId,
                    user.Email, user.AppealsCount);

            using var wb = new XLWorkbook();
            wb.Worksheets.Add(dataTable);
            using var stream = new MemoryStream();
            wb.SaveAs(stream);

            return Results.File(stream.ToArray(),
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                fileName);
        });
        app.MapPut("/{userId}", async (ApplicationDbContext dbContext, int userId, UserEntity newUser) =>
        {
            var user = await dbContext.Users.FindAsync(userId);
            if (user == null) return Results.NotFound();
            user.Age = newUser.Age;
            user.Location = newUser.Location;
            user.UserType = newUser.UserType;
            user.PhoneNumber = newUser.PhoneNumber;
            user.GovId = newUser.GovId;
            user.Email = newUser.Email;
            user.AppealsCount = newUser.AppealsCount;
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