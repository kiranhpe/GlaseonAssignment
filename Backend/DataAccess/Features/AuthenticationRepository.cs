using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Features
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        public bool CheckAuthentication(string username, string password)
        {
            using (var context = new EmployeeDbContext())
            {
                return context.Admin.Where(x => x.username == username && x.password == password).ToList().Count() > 0 ? true : false;
            }

        }
    }
}
