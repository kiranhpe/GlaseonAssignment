using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Features
{
    public interface IUserRepository
    {
        Users AddUser(Users users);

        ICollection<Users> GetUsers(Users users);

        Users UpdateUser(Users users);

        bool DeleteUser(Users users);
    }
}
