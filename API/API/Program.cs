using API;
using API.Endpoints;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);
builder.Services.ConfigureServices(builder.Configuration);
var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapGroup("/users").WithTags("Users").MapUsers();
app.MapGroup("/appeals").WithTags("Appeals").MapAppeals();
app.MapGroup("/admins").WithTags("Admins").MapAdmins();
app.MapGroup("/locations").WithTags("Locations").MapLocations();

app.Run();