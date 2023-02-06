using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace api_rest.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

        public DbSet<TodoItemDTO> TodoItems { get; set; } = null!;
    }
}
