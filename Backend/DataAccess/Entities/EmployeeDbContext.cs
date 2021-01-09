using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Entities
{
    class EmployeeDbContext : DbContext
    {

        public virtual DbSet<Admin> Admin { get; set; }

        public virtual DbSet<Roles> Roles { get; set; }

        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<CustomerType> CustomerTypes { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.\SQLExpress;Database=Assignment;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }
    }
}
