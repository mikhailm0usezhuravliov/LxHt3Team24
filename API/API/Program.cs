using API;
using API.Endpoints;

var builder = WebApplication.CreateBuilder(args);
builder.Services.ConfigureServices();
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGroup("/users").MapUsers();
app.MapGroup("/appeals").MapAppeals();
app.MapGroup("/admins").MapAdmins();
app.MapGroup("/locations").MapLocations();

app.Run();