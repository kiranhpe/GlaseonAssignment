using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Features
{
    public class UserRepository : IUserRepository
    {
        public Users AddUser(Users users)
        {
            if (users != null)
            {
                using (var context = new EmployeeDbContext())
                {
                    context.Add(users);

                    context.SaveChanges();
                }
                return users;
            }

            return null;
        }

        public bool DeleteUser(Users users)
        {
            if (users != null)
            {
                using (var context = new EmployeeDbContext())
                {
                    var isExists = context.Users.Where(x => x.Id == users.Id).FirstOrDefault();

                    if (isExists != null)
                    {
                        context.Users.Remove(isExists);

                        context.SaveChanges();

                        return true;
                    }

                    return false;
                }
            }

            return false;
        }

        public ICollection<Users> GetUsers(Users users)
        {

            using (var context = new EmployeeDbContext())
            {
                if(users != null)
                {
                    return context.Users.ToList();
                }

                return context.Users.Where(x => x.Id == users.Id).ToList();
            }


        }

        public Users UpdateUser(Users users)
        {
            if (users != null)
            {
                using (var context = new EmployeeDbContext())
                {
                    var isExists = context.Users.Where(x => x.Id == users.Id).FirstOrDefault();

                    if (isExists != null)
                    {
                        isExists.last_name = users.last_name;
                        isExists.first_name = users.first_name;
                        isExists.email = users.email;
                        isExists.username = users.username;
                        isExists.role_id = users.role_id;
                        isExists.customer_type_id = users.customer_type_id;
                        isExists.trail_user = users.trail_user;

                        context.SaveChanges();
                    }

                    return isExists;
                }
            }

            return null;
        }
    }
}
