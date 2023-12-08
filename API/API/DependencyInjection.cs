using API.Database;
using Microsoft.EntityFrameworkCore;

namespace API;

public static class DependencyInjection
{
    public static void ConfigureServices(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer("Server=35.188.213.183,1433;Database=lx-h-t24-b1;User Id=sqlserver;Password=QduHJn@+V.&Id\"/j;"));
    }
}